const route = require("express").Router();
const wsMethods = require("../wsMethods");
const connections = new wsMethods();

route.ws('', (ws, req) => {
  connections.addClient(ws);

  connections.broadcastMessage(JSON.stringify({
    target: "online",
    value: connections.quantity
  }));

  ws.on("message", (msg) => {
    console.log(msg);
  });

  ws.on("close", () => {
    connections.deleteClient(ws);
    connections.broadcastMessage(JSON.stringify({
      target: "online",
      value: connections.quantity
    }));
  })
});

module.exports = route;
