import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    if (!props.socket) return;

    // Recebe mensagens do servidor SignalR
    props.socket.on("ReceiveMessage", (data) => {
      // Valida se a mensagem recebida é um objeto válido
      if (
        data &&
        typeof data === "object" &&
        typeof data.text === "string" &&
        typeof data.author === "string" &&
        typeof data.authorId === "string"
      ) {
        setMessageList((current) => [...current, data]);
      } else {
        console.error("Mensagem inválida recebida:", data);
      }
    });

    return () => {
      props.socket.off("ReceiveMessage"); // Remove o listener ao desmontar o componente
    };
  }, [props.socket]);

  const handleSubmit = async () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    try {
      // Envia a mensagem para o servidor SignalR
      await props.socket.invoke("SendMessage", message);
      messageRef.current.value = "";
      messageRef.current.focus();
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
    }
  };

  return (
    <div
      id="chat-container"
      className={`bg-secondary rounded-4 p-3 d-flex flex-column mt-2 ${styles.chatContainer}`}
    >
      <div
        id="chat-body"
        className="overflow-y-hidden h-100 d-flex flex-column gap-3"
      >
        {messageList.map((message, index) => (
          <div
            className={`${
              message.authorId === props.socket.connectionId
                ? "align-self-end ms-5 bg-success-subtle"
                : "align-self-start me-5 bg-warning-subtle"
            } rounded-3 p-2 text-dark text-break`}
            key={index}
          >
            <div id="message-author">
              <p className="fw-bold">{message.author}</p>
            </div>
            <div id="message-text">{message.text}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      <div id="chat-footer" className="input-group">
        <input
          ref={messageRef}
          id="msgUser"
          name="msgUser"
          type="text"
          className="form-control"
          placeholder="Digite sua mensagem..."
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button
          id="send-button"
          className="btn btn-light m-0 input-group-text"
          type="button"
          onClick={() => handleSubmit()}
        >
          <i className="bi bi-send-fill"></i>
        </button>
      </div>
    </div>
  );
};

export default Chat;