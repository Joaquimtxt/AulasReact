import React, { useEffect, useRef, useState } from "react";

const Chat = (props) => {
  const [messageList, setMessageList] = useState([]);
  const messageRef = useRef();
  const bottomRef = useRef();

  useEffect(() => {
    props.socket.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });
    return () => props.socket.off("receive_message");
  }, [props.socket]);

  useEffect(() => {
  bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [messageList]);

  const handleSubmit = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    props.socket.emit("message", message)

    messageRef.current.value = "";
    messageRef.current.focus();
  };

  return (
    <div
      id="chat-container"
      style={{ width: "400px", height: "600px" }}
      className="bg-secondary rounded-4 p-3 d-flex flex-column m-4"
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
            <div className="fw-bold" id="message-author">
              {message.author}
            </div>
            <div id="message-text">{message.text}</div>
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
