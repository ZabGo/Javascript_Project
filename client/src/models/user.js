const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const User = function () {
  this.url = 'http://localhost:3000/wonders/user';
  this.request = new RequestHelper(this.url);
};

Game.prototype.getData = function () {
  this.request.get()
    .then((questionAndAnswer) => {
      PubSub.publish('Game:question-answer-loaded', questionAndAnswer);
    })
    .catch(console.error);
};

Game.prototype.postNewGame = function (newUser) {
  this.request.post(newUser)
    .then((game) => {
      PubSub.publish('Game:question-answer-loaded', questionAndAnswer);
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
