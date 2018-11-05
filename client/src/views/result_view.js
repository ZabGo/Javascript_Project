

const ResultView = function (container) {
  this.container = container;
  this.points = 0;
};


ResultView.prototype.render = function () {
  const result = document.createElement('p')
  result.textContent = `points: ${this.points}`;

  this.container.appendChild(result);
};

ResultView.prototype.add10Points = function () {
  this.points += 10;
};









module.exports = ResultView;
