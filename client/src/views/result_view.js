const PubSub = require('../helpers/pub_sub.js')

const ResultView = function (container) {
  this.container = container;
  this.points = 0;
  this.lives = 3;
  this.counter = 0;
};


ResultView.prototype.render = function () {
  this.container.innerHTML = "";
  const result = document.createElement('p')
  result.textContent = `points: ${this.points}`;

  this.container.appendChild(result);

  this.playAgain();
};

ResultView.prototype.addPoints = function () {
  this.counter += 1
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
};

ResultView.prototype.endOfGame = function () {
  this.container.innerHTML = "";
  const end = document.createElement("p");
  end.textContent = "Congratulations you finished all the questions!"
  this.container.appendChild(end)

  const result = document.createElement('p')
  result.textContent = `points: ${this.points}`;

  this.container.appendChild(result);

  this.playAgain();
};

ResultView.prototype.playAgain = function () {
  const playAgain = document.createElement('button');
  playAgain.textContent = "Play again";
  this.container.appendChild(playAgain);

  playAgain.addEventListener('click', (event) => {
    this.counter = 0;
    this.lives = 3;
    this.points = 0;
    PubSub.publish('ResultView:Play-again', event)
  })
};

module.exports = ResultView;
