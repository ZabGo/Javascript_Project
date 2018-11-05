const PubSub = require('../helpers/pub_sub.js');
const GameView = require('./game_view.js');

const GameGridView = function (container) {
  this.container = container
}

GameGridView = function () {
  PubSub.subscribe('Game:question-answer-loaded', (event) => {
    this.render(event.detail);
  })
}

module.exports = GameGridView;
