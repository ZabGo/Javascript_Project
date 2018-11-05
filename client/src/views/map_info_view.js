const PubSub = require('../helpers/pub_sub.js');
const leaflet = require('leaflet');

const MapInfoView = function (container) {
  this.container = container;
}

MapInfoView.prototype.bindEvents = function () {
//   PubSub.subscribe('Info:mapInfoData', (evt) => {
//
// });
this.render();
}

MapInfoView.prototype.render = function (data) {
  this.container.innerHTML = '';
  const mapInfoView = new MapInfoView(this.container);
  // data.forEach((wonder) => mapInfoView.render(wonder.name, wonder.location));
  this.createMap();
};



MapInfoView.prototype.createMap = function () {
  const mapContainer = document.createElement('div');
  mapContainer.id = 'mapContainer';
  var mymap = L.map(mapContainer).setView([51.505, -0.09], 13);
  this.container.appendChild(mapContainer);
  // this.mapContainer.appendChild(mymap);


  const CARTOUrl = 'https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png';
  const CARTOTileLayer = new leaflet.TileLayer(CARTOUrl, {
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://carto.com/attributions">CARTO</a>'
});

this.leafletMap = leaflet.map(this.container)
  .addLayer(CARTOTileLayer)
  .setView([51.505, -0.09], 13);
};

// MapInfoView.prototype.createText = function () {
//
// };



module.exports = MapInfoView;
