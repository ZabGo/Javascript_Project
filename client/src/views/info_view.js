const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Info:mapInfoData', (evt) => {
    console.log(evt);
    console.log(evt[0]);
    this.render(evt.detail[0]);
  })
}

InfoView.prototype.render = function (wonder) {
  this.container.innerHTML = '';

  const overAllDiv = document.createElement('div');

  const imageElement = document.createElement('IMG');
  imageElement.src = "";
  overAllDiv.appendChild(imageElement);

  const nameElement = document.createElement('h1');
  nameElement.innerHTML = wonder.name;
  overAllDiv.appendChild(nameElement);

  const descriptionElement = document.createElement('p');
  descriptionElement.innerHTML = wonder.details;
  overAllDiv.appendChild(descriptionElement);

  this.container.appendChild(overAllDiv);

};

module.exports = InfoView;
