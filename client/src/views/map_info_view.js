cost PubSub = require('../helpers/pub_sub.js');

const MapInfoView = function (container) {
  this.container = container;
}

MapInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Info:mapInfoData', (evt) => {
    this.render(evt.detail);
  });
};

MapInfoView.prototype.render = function (data) {
  this.container.innerHTML = '';
  this.createMap(data);
};

MapInfoView.prototype.createMap = function () {

};

// MapInfoView.prototype.createText = function () {
//
// };



module.exports = MapInfoView;
