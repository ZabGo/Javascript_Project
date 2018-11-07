const assert = require('assert');
const GameView = require('../views/game_view.js');

describe('Cinema', function () {
  let gameView;
  let container;
  let questionAndAnswer;

  beforeEach(function () {
    container = document.querySelector('#display');
    questionAndAnswer = {
  		monument: "Temple of Artemis",
  		qAndA: {
  			question: "What was the Temple of Artemis less precisely known as?",
  			answer1: {
  				content: "Temple of Nyx",
  				status: false
  			},
  			answer2: {
  				content: "Temple of Diana",
  				status: true
  			},
  			answer3: {
  				content: "Temple of Metis",
  				status: false
  			},
  			answer4: {
  				content: "Temple of Orpheus",
  				status: false
  			},
  		}
  	}
    gameView = new GameView(container)
  })

  it('should add 10 points for each correct answer', function () {
    const actual = gameView.checkIfAnswerCorrect(questionAndAnswer)
  })
})
