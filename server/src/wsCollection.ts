const { nanoid } = require('nanoid');
const { Session } = require('./Session');

module.exports.WsCollection = class WsCollection {
  private clients = new Set<WebSocket>();

  private sessions = new Map<string, typeof Session>();

  addClient(client: WebSocket): WsCollection {
    this.clients.add(client);
    return this;
  }

  deleteClient(client: WebSocket): WsCollection {
    this.clients.delete(client);
    return this;
  }

  createSession(client: WebSocket): string {
    const sessionId: string = nanoid(7);
    this.sessions.set(sessionId, new Session(client));
    return sessionId;
  }

  get quantity(): number {
    return this.clients.size;
  }

  broadcastMessage(msg: string): void {
    this.clients.forEach((client) => client.send(msg));
  }
};
