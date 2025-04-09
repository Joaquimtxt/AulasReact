import React, { useRef } from "react";
import * as signalR from "@microsoft/signalr";

const Join = (props) => {
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim() || username.length < 3 || username.length > 15) {
      alert("Por favor, digite um nome de usuário válido.");
      return;
    }

    // Criando a conexão com o servidor SignalR
    const connection = new signalR.HubConnectionBuilder()
      .withUrl("http://192.168.0.113:5000/chathub", {
        withCredentials: true // Inclui as credenciais na solicitação
      })
      .withAutomaticReconnect() // Reconexão automática em caso de falha
      .build();

    try {
      // Inicia a conexão
      await connection.start();
      console.log("Conectado ao servidor SignalR");

      // Envia o nome de usuário para o servidor
      await connection.invoke("SetUsername", username);

      // Configura a conexão no estado global
      props.setSocket(connection);
      props.visibility(true);
    } catch (error) {
      console.error("Erro ao conectar ao servidor SignalR:", error);
    }
  };

  return (
    <div className="text-center">
      <h1>devChat</h1>
      <div
        id="join-box"
        className="mt-2 bg-secondary rounded-4 py-4 px-5 d-flex flex-column justify-content-center align-items-center gap-3"
      >
        <h3>Bem-Vindo ao devChat</h3>
        <div className="form-floating mb-3">
          <input
            ref={usernameRef}
            id="floatingInput"
            className="form-control"
            type="text"
            placeholder="Nome de Usuário"
            onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
          />
          <label htmlFor="floatingInput">Nome de Usuário</label>
        </div>
        <button
          className="btn btn-light px-5 py-2"
          onClick={() => handleSubmit()}
        >
          Entrar
        </button>
      </div>
    </div>
  );
};

export default Join;