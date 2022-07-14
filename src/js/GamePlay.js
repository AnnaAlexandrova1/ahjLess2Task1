export default class GamePlay {
  constructor(board, goblin, size) {
    this.board = board;
    this.goblin = goblin;
    this.size = size;
    this.position = undefined;
    this.activePosition = null;
  }

  createPosition() {
    this.cells = Array.from(document.getElementsByClassName('cell'));

    let position = Math.floor(Math.random() * this.size ** 2);
    if (this.position === position) {
      position = Math.floor(Math.random() * this.size ** 2);
    }
    this.removePosition();
    this.position = position;
    this.addPosition();
  }

  removePosition() {
    if (this.position === undefined) {
      return;
    }
    this.cells[this.position].firstChild.remove();
  }

  addPosition() {
    this.activePosition = this.goblin.getGoblin();
    this.cells[this.position].classList.add('goblin');
    console.log(this.cells);
  }

  start() {
    setInterval((this.createPosition()), 1000);
  }
}
