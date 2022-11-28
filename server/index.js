const express = require("express");
const { Server } = require("socket.io");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	socket.on("join", (data) => {
		socket.join(data.channel);
		socket.emit("joined_room", data);
	});

	socket.on("send_chat", (data) => {
		socket.broadcast.emit("get_chat", data);
		console.log("chat been made");
	});
});

server.listen(8080, () => {
	console.log("CONNECTED");
});
