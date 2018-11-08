const PubSub = require('../helpers/pub_sub.js');
const Chart = require("./chart.js");
const User = require("../models/user.js");

const ResultView = function (container) {
  this.container = container;
  this.points = 0;
  this.lives = 3;
  this.counter = 0;
  this.questionsAnswered = 0;
};

ResultView.prototype.render = function () {
  this.container.innerHTML = "";

  this.displayPoints();
  this.playAgain();
};

ResultView.prototype.addPoints = function () {
  this.counter += 1;
  this.questionsAnswered += 1;

  if(this.counter === 10){
    this.points += 100;
    this.counter = 0;
    this.lives += 1;
  }else{
    this.points += 10;
  }
};

ResultView.prototype.removeOneLife = function () {
  this.lives -= 1;
  this.counter = 0;
  this.questionsAnswered += 1;
};

ResultView.prototype.endOfGame = function () {
  this.container.innerHTML = "";

  const end = document.createElement("p");
  end.textContent = "Congratulations you finished all the questions!";
  end.className = "result-view"
  this.container.appendChild(end);

  this.displayPoints();
  this.playAgain();
};

ResultView.prototype.playAgain = function () {
  const playAgain = document.createElement('button');
  playAgain.textContent = "Play again";
  playAgain.id = 'play-again'
  this.container.appendChild(playAgain);

  playAgain.addEventListener('click', (event) => {
    this.counter = 0;
    this.lives = 3;
    this.points = 0;
    this.questionsAnswered = 0;
    PubSub.publish('ResultView:Play-again', event)
  })
};

ResultView.prototype.displayPoints = function () {
  const endMessage = document.createElement('p');
  endMessage.textContent = "Well done! You have scored"
  endMessage.className = "result-view"

  const result = document.createElement('p')
  result.textContent = `${this.points} points!`;
  result.className = "result-view"

  this.container.appendChild(endMessage)
  this.container.appendChild(result);
  this.createChart(this.points);
};

ResultView.prototype.createChart = function(points) {

const displayChart = document.createElement('div');
displayChart.id = "chart";
this.container.appendChild(displayChart);

this.lastTwoGames();

};

ResultView.prototype.lastTwoGames = function() {

    const user = new User();
    const data = user.getData();

    PubSub.subscribe("User:data-ready", (evt) => {
      let count = 0;

      console.log(evt);


      evt.detail.forEach((game) => {
        if(game.game > count){
          count = game.game;
        }
      })

      const mostRecentGame = {
        game: count += 1,
        points: this.points
      };

      console.log(count);

      let myChart = new Chart();
      myChart.render(mostRecentGame, evt.detail);

      //post
      PubSub.publish("Result:new-game-to-add", mostRecentGame);
    })



};



module.exports = ResultView;
