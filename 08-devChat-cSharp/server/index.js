const {Server} = require('socket.io');
const http = require('http');

//Cria um server http
const server = http.createServer();

//Configura o Socket.IO
const io = new Server(server, {
  cors: {
    origin: '*',
  },
});
// Armazena os nomes de usuários associados aos sockets
const users = {};

//Evento de conexão
io.on("connection", (socket) => {
console.log(`Usuário conectado: ${socket.id}`);
 // Evento para definir o nome de usuário
 socket.on("set_username", (username) => {
    users[socket.id] = username; // Associa o nome de usuário ao socket
    console.log(`Usuário ${socket.id} definiu o nome: ${username}`);
  });



// Evento para receber mensagens
  socket.on("message", (text) => {
    const author = users[socket.id] || "Anônimo"; // Obtém o nome do autor ou usa "Anônimo"
    const data = { author, text, authorId: socket.id };

    console.log(`Mensagem recebida de ${author}: ${text}`);
    io.emit("receive_message", data); // Envia a mensagem para todos os clientes conectados
  });


  // Evento de desconexão
  socket.on("disconnect", () => {
    console.log(`Usuário desconectado: ${socket.id}`);
    delete users[socket.id]; // Remove o usuário desconectado da lista
  });
});

// Inicia o servidor na porta 3001
server.listen(3001, () => {
  console.log("Servidor Socket.IO rodando na porta 3001");

})