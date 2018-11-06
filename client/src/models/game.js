const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Game = function () {
  this.url = 'http://localhost:3000/wonders/game';
  this.request = new RequestHelper(this.url);
};

Game.prototype.getData = function () {
  this.request.get()
    .then((questionAndAnswer) => {
      // const arrayOfQuestions = event.detail;


      // const questionsAlreadyAsked = [];
      // if (questionsAlreadyAsked.includes(individualQuestion)) {
      //   individualQuestion = questionAndAnswer[Math.floor(Math.random()*questionAndAnswer.length)];
      // }

      // function
      // get a random question
      // check if it has been used in array
      // if not in array, add to array and pass to game
      // if in array, pick another random quesiton
      // if all questions are in array (array length === questionAndAnswer array length), end game.


      PubSub.publish('Game:question-answer-loaded', questionAndAnswer);
    })
    .catch(console.error);
};

module.exports = Game;
