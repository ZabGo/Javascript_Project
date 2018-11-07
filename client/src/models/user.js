const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const User = function () {
  this.url = 'http://localhost:3000/wonders/user';
  this.request = new RequestHelper(this.url);
};

Game.prototype.getData = function () {
  this.request.get()
    .then((userDetails) => {
      this.lastTwoGames(userDetails);
    })
    .catch(console.error);
};

User.prototype.lastTwoGames = function (userDetails) {

  let count = 0;
  let lastGame = {};
  let secondCount = 0;
  let secondLastGame = {};

  userDetails.forEach((game) => {
    if(game.game > count){
      count = game.game;
    }
  })

  userDetails.forEach((game) => {
    if(game.game == count){
      lastGame = game;
    }
  })

  userDetails.forEach((game) => {
    if(game.game > secondCount && game.game < count){
      secondCount = game.game;
    }
  })

  userDetails.forEach((game) => {
    if(game.game == secondCount){
      secondLastGame = game;
    }
  })

  return [lastGame, secondLastGame];

}

Game.prototype.postNewGame = function (newUser) {
  this.request.post(newUser)
    .then((game) => {
      PubSub.publish('Game:question-answer-loaded', userDetails);
    })
    .catch(console.error);
};

Consumables.prototype.postData = function (formData) {
  this.request.post(formData)
    .then((consumables) => {
      PubSub.publish(`Consumables:${this.category}-data-loaded`, consumables);
    });
};

module.exports = User;
