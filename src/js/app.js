import Board from './Board';
import GamePlay from './GamePlay';
// import Goblin from './Goblin';

const board = new Board();
board.drowBoard(4);
// const goblin = new Goblin();
const gamePlay = new GamePlay(board, 4);
gamePlay.start();

/* import imgLink from '../img/goblin.png';

export default class startPlay {
  constructor() {
    this.innerList = null;
    this.index = null;
    this.lastIndex = null;
  }

  start() {
    this.innerList = Array.from(document.getElementsByClassName('inner'));
    this.index = Math.floor((Math.random() * this.innerList.length));
    this.innerList[this.index].innerHTML = '<img src=goblin.png>';
    this.lastIndex = this.index;

    setInterval(() => {
      this.index = Math.floor((Math.random() * this.innerList.length));
      if (this.index === this.lastIndex) {
        this.index += 1;
        if (this.index >= this.innerList.length) {
          this.index = 0;
        }
      }
      this.innerList[this.index].innerHTML = `<img class='img' src="${imgLink}">`;
      if (this.lastIndex >= 0) {
        this.innerList[this.lastIndex].innerHTML = '';
      }
      this.lastIndex = this.index;
    }, 1000);
  }
}
const playGame = new startPlay();
playGame.start(); */
