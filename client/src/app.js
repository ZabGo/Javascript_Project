
const PubSub = require('./helpers/pub_sub.js')
const MapInfoView = require('./views/map_info_view.js');
const Info = require('./models/info.js');
const InfoView = require('./views/info_view.js');
const Game = require("./models/game.js");
const GameGridView = require("./views/game_grid_view.js");

document.addEventListener('DOMContentLoaded', () => {

  const displayTag = document.querySelector('div#display');
  const mapInfoView = new MapInfoView(displayTag);

  document.querySelector('#info').addEventListener('click', (e) => {
          // const map = document.querySelector('.map');
          // const divmap = document.querySelector('#display');
          // divmap.remove();
          // const map = document.createElement('div');
          // map.id = "display"

          // map.src = "https://unpkg.com/leaflet@1.3.4/dist/leaflet.js";


          const url = 'http://localhost:3000/wonders/info';
          const info = new Info(url);
          info.getData();
          info.bindEvents();

          const infoView = new InfoView(displayTag);
          infoView.bindEvents();
          mapInfoView.bindEvents(info);

  })
  document.querySelector('#game').addEventListener('click', (event) => {
    const gameContainer = document.querySelector('div#display');
    const gameGridView = new GameGridView(gameContainer);
    gameGridView.bindEvents();
    const game = new Game();
    game.getData();
  })
})
