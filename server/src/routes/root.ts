import express from "express";
import { wsCollection } from "../wsCollection";

export const route = express.Router();
const connections: wsCollection = new wsCollection();

 route.ws('', (ws) => {
  connections.addClient(ws);

  connections.broadcastMessage(JSON.stringify({
    target: "online",
    value: connections.quantity
  }));

  ws.on("close", () => {
    connections.deleteClient(ws);

    connections.broadcastMessage(JSON.stringify({
      target: "online",
      value: connections.quantity
    }));
  })
});
