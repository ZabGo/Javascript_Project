const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Game = funciton (url) {
  this.url = 'http://localhost:3000/game';
  this.request = new RequestHelper(this.url);
};

Game.prototype.getData = function () {
  this.request.get()
    .then((questionAndAnswer) => {
      PubSub.publish('Game:question-answer-loaded', questionAndAnswer)
    })
    .catch(console.error);
};

module.exports = Game;
