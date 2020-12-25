module.exports.Session = class Session {
  firstPlayer: WebSocket

  secondPlayer: WebSocket

  gameArena: Array<Array<number>>

  constructor(creator: WebSocket, arenaSize = 3) {
    this.firstPlayer = creator;
    this.secondPlayer = null;
    this.gameArena = new Array(arenaSize).fill(0).map(() => new Array<number>(arenaSize).fill(0));
  }

  getMove(newArena: Array<Array<number>>): void {
    this.gameArena = newArena;
  }

  connectSecondPlayer(player: WebSocket): void {
    this.secondPlayer = player;
  }
};
