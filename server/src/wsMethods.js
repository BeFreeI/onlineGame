class wsCollection {
  clients = new Set();

  addClient(client) {
    this.clients.add(client);
  }

  deleteClient(client) {
    this.clients.delete(client);
  }

  get quantity() {
    return this.clients.size;
  }

  broadcastMessage(msg) {
    this.clients.forEach((client) => client.send(msg));
  }
}


module.exports = wsCollection;
