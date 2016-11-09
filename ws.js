var WebSocKetServer = require("ws").Server;
var wss = new WebSocKetServer({port: 3000}, function() { console.log("Server running")} );


//whenever client connect to the websocketserver, this function will be excuted
wss.on("connection", function(ws) {
	ws.on("message", function(message) {
		if(message === "exit") {
			ws.close();
		} else {
			wss.clients.forEach(function(client) {
				client.send(message);
			});
		}
	})
	ws.send("Welcome to Cyber Chat");
});

