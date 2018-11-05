const Game = require("./models/game.js");
const GameGridView = require("./views/game_grid_view.js");


document.addEventListener("DOMContentLoaded", ()  => {
  const gameContainer = document.querySelector('div#display');
  const gameGridView = new GameGridView(gameContainer);
  gameGridView.bindEvents();

  const game = new Game();
  game.getData();

});
