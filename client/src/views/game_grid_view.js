const PubSub = require('../helpers/pub_sub.js');
const GameView = require('./game_view.js');
const Game = require('../models/game.js');

const GameGridView = function (container) {
  this.container = container;
  this.gameView = new GameView(this.container);
  this.game = new Game();
}

GameGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:question-answer-loaded', (event) => {
  this.container.innerHTML = "";
  // const gameView = new GameView(this.container);
  // console.log(event.detail);
  this.gameView.render(event.detail);
  });
  PubSub.subscribe("GameView:New-question", (event) => {
    this.game.getData();
  });

};






  // this.data();
//   PubSub.subscribe('GameView:New-question', (event) => {
//     this.data();
//   })
// }
//
// GameGridView.prototype.data = function () {
//   PubSub.subscribe('Game:question-answer-loaded', (event) => {
//      const arrayOfQuestions = event.detail;
//      individualQuestion = arrayOfQuestions[Math.floor(Math.random()*arrayOfQuestions.length)];
//      this.render(individualQuestion);
//    });
// };
//
// GameGridView.prototype.render = function (individualQuestion) {
//
//   this.container.innerHTML = "";
//     const gameView = new GameView(this.container);
//     gameView.render(individualQuestion);
// }


module.exports = GameGridView;
