const GameView = function(container){
  this.container = container;
}


GameView.prototype.render = function (questionAndAnswer) {
  console.log(questionAndAnswer);
  const questionContainer = document.createElement('div');
  questionContainer.id = "question";
  questionContainer.textContent = questionAndAnswer.qAndA.question;

  this.container.appendChild(questionContainer);


  const answersContainer = document.createElement("div");
  answersContainer.id = "answers";





  const answer1Container = document.createElement("div");
  answer1Container.id = "answer1";

  const answer2Container = document.createElement("div");
  answer2Container.id = "answer2";

  const answer3Container = document.createElement("div");
  answer3Container.id = "answer3";

  const answer4Container = document.createElement("div");
  answer4Container.id = "answer4";



};


module.exports = GameView;
