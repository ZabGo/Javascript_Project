const MapInfoView = require('./views/map_info_view.js');
const Info = require('./models/info.js');

document.addEventListener('DOMContentLoaded', () => {
  const displayTag = document.querySelector('div#display');
  const mapInfoView = new MapInfoView(displayTag);
  mapInfoView.bindEvents();

  const url = 'http://localhost:3000/wonders/info';
  const info = new Info(url);
  info.bindEvents;
  info.getData;
})
