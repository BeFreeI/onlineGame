class wsCollection {
  #clients = new Set<WebSocket>();

  addClient(client: WebSocket): wsCollection {
    this.#clients.add(client);
    return this;
  }

  deleteClient(client: WebSocket): wsCollection {
    this.#clients.delete(client);
    return this;
  }

  get quantity(): number {
    return this.#clients.size;
  }

  broadcastMessage(msg:  string): void {
    this.#clients.forEach((client) => client.send(msg));
  }
}

module.exports = wsCollection;
