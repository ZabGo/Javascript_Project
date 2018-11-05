const PubSub = require('../helpers/pub_sub.js');
const GameView = require('./game_view.js');

const GameGridView = function (container) {
  this.container = container
}

GameGridView.prototype.bindEvents = function () {
  PubSub.subscribe('Game:question-answer-loaded', (event) => {
    const arrayOfQuestions = event.detail;
    individualQuestion = arrayOfQuestions[Math.floor(Math.random()*arrayOfQuestions.length)];
    this.render(individualQuestion);
  });
};

GameGridView.prototype.render = function (questionAndAnswer) {
  this.container.innerHTML = "";
  const gameView = new GameView(this.container);
  gameView.render(questionAndAnswer);
}


module.exports = GameGridView;
