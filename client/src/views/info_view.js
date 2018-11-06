const PubSub = require('../helpers/pub_sub.js');

const InfoView = function (container) {
  this.container = container;
};

InfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Info:wonderSelected', (evt) => {
    this.render(evt.detail);
  })


}
InfoView.prototype.render = function (wonder) {
  this.container.innerHTML = '';

  const overAllDiv = document.createElement('div');
  const imageDiv = documnet.createElement('div');

  const imageElement = document.createElement('IMG')
  imageElement.src = `/images/${wonder.image}`;
  overAllDiv.appendChild(imageElement);

  const nameElement = document.createElement('h1')
  nameElement.innerHTML = wonder.name;
  overAllDiv.appendChild(nameElement);

  const descriptionElement = document.createElement('p')
  descriptionElement.innerHTML = wonder.details;
  overAllDiv.appendChild(descriptionElement);

  this.container.appendChild(overAllDiv);
};


module.exports = InfoView;
