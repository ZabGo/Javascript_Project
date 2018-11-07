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
  this.container.textContent = '';

  console.log(wonder.image);

  const overAllDiv = document.createElement('div');

  const contentDiv = document.createElement('div');
  const nameElement = document.createElement('h1');
  nameElement.id = 'text';
  nameElement.innerHTML = wonder.name;
  overAllDiv.appendChild(contentDiv);
  contentDiv.appendChild(nameElement);

  const imageDiv = document.createElement('div');
  imageDiv.id = 'imageDiv';
  const imageElement = document.createElement('IMG');
  imageElement.src = `images/${wonder.image}`;
  overAllDiv.appendChild(imageDiv);
  imageDiv.appendChild(imageElement);

  const descriptionElement = document.createElement('p')
  descriptionElement.id = "description";
  descriptionElement.innerHTML = wonder.details;
  overAllDiv.appendChild(descriptionElement);

  this.container.appendChild(overAllDiv);
};


module.exports = InfoView;
