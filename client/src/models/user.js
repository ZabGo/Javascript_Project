const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const User = function () {
  this.url = 'http://localhost:3000/wonders/user';
  this.request = new RequestHelper(this.url);
};

User.prototype.getData = function () {
  this.request.get()
    .then((userDetails) => {
      // console.log(userDetails);
      const result = this.lastTwoGames(userDetails);
      PubSub.publish("User:data-ready", result);
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
      console.log(secondLastGame);
    }
  })

  return [lastGame, secondLastGame];

}

User.prototype.postNewGame = function (newUser) {
  this.request.post(newUser)
    .then((game) => {
      PubSub.publish('Game:question-answer-loaded', userDetails);
    })
    .catch(console.error);
};

User.prototype.postData = function (formData) {
  this.request.post(formData)
    .then((consumables) => {
      PubSub.publish(`Consumables:${this.category}-data-loaded`, consumables);
    });
};

module.exports = User;
