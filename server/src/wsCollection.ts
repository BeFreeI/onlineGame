import { Session } from "./Session";
import WebSocket from 'ws';
import { nanoid } from "nanoid";

export class wsCollection {
  private clients = new Set<WebSocket>();
  private sessions = new Map<string, Session>();

  addClient(client: WebSocket): wsCollection {
    this.clients.add(client);
    return this;
  }

  deleteClient(client: WebSocket): wsCollection {
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

  broadcastMessage(msg:  string): void {
    this.clients.forEach((client) => client.send(msg));
  }
}
