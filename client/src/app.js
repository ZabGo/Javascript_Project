const MapInfoView = require('./views/map_info_view.js');
const Info = require('./models/info.js');
const InfoView = require('./views/info_view.js');

document.addEventListener('DOMContentLoaded', () => {
    const displayTag = document.querySelector('div#display');
    const mapInfoView = new MapInfoView(displayTag);

  document.querySelector('#info').addEventListener('click', (e) => {
          const url = 'http://localhost:3000/wonders/info';
          const info = new Info(url);
          info.getData();
          info.bindEvents();

          const infoView = new InfoView(displayTag);
          infoView.bindEvents();
          mapInfoView.bindEvents(info);
  })
})
