import React, { useEffect, useRef, useState } from "react";
import styles from "./Chat.module.css";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      // Valida se a mensagem recebida é um objeto válido
      if (
        data &&
        typeof data === "object" &&
        typeof data.text === "string" &&
        typeof data.time === "string"
      ) {
        setMessageList((current) => [...current, data]);
      } else if (
        data &&
        typeof data === "object" &&
        typeof data.text === "object" &&
        typeof data.text.text === "string" &&
        typeof data.text.time === "string"
      ) {
        // Corrige a estrutura da mensagem se `data.text` for um objeto
        const correctedMessage = {
          text: data.text.text,
          time: data.text.time,
          authorId: data.text.authorId || data.authorId,
          author: data.text.author || data.author,
        };
        setMessageList((current) => [...current, correctedMessage]);
      } else {
        console.error("Mensagem inválida recebida:", data);
      }
    });
  
    return () => props.socket.off("receive_message");
  }, [props.socket]);
  
  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;
  
    // Obtém a hora atual no momento do envio
    const horaAtual = new Date();
    const hora = horaAtual.getHours().toString().padStart(2, "0");
    const minuto = horaAtual.getMinutes().toString().padStart(2, "0");
    const horario = `${hora}:${minuto}`;
  
    // Envia a mensagem com a estrutura correta
    props.socket.emit("message", {
      text: message, // Texto simples
      time: horario, // Hora formatada
      authorId: props.socket.id,
      author: "Seu Nome", // Substitua por um valor dinâmico, se necessário
    });
  
    messageRef.current.value = "";
    messageRef.current.focus();
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
        className={`${message.authorId === props.socket.id? "align-self-end ms-5 bg-success-subtle" : "align-self-start me-5 bg-warning-subtle"}  rounded-3 p-2 text-dark text-break`}
            key={index}
          >
           <div id="message-author">
            <p className="fw-bold">{message.author}</p>
          </div>
          <div id="message-text">{message.text}</div>
          <div id="message-time" className="text-muted small text-end">
            {message.time}
          </div>
        </div>
        ))}
        <div ref={bottomRef}/>{/**/}
        </div>
      <div id="chat-footer" className="input-group">
        <input
          ref={messageRef}
          id="msgUser"
          name="msgUser"
          type="text"
          className="form-control"
          placeholder="Digite sua mensagem..."
          onKeyDown={(e) => e.key =="Enter" && handleSubmit()}
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
