const route = require('express').Router();
const { WsCollection } = require('../wsCollection');

const connections: typeof WsCollection = new WsCollection();

route.ws('', (ws) => {
  connections.addClient(ws);

  connections.broadcastMessage(JSON.stringify({
    target: 'online',
    value: connections.quantity,
  }));

  ws.on('close', () => {
    connections.deleteClient(ws);

    connections.broadcastMessage(JSON.stringify({
      target: 'online',
      value: connections.quantity,
    }));
  });

  ws.on('message', (data) => {
    const { target, value } = JSON.parse(data);
    switch (target) {
      case 'send':
        connections.broadcastMessage(JSON.stringify({
          target: 'message',
          value,
        }), [ws]);
        break;
      default:
        break;
    }
  });
});

module.exports = route;
