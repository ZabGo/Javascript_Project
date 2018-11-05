const MapInfoView = require('./views/map_info_view.js');
const Info = require('./models/info.js');

document.addEventListener('DOMContentLoaded', () => {
  const displayTag = document.querySelector('div#display');
  const mapInfoView = new MapInfoView(displayTag);
  const url = 'http://localhost:3000/wonders/info';
  const info = new Info(url);
  info.getData();
  mapInfoView.bindEvents(info);




  // info.bindEvents;
})
