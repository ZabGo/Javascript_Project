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
  answer1Container.value = questionAndAnswer.qAndA.answer1.status;
  answer1Container.textContent = questionAndAnswer.qAndA.answer1.content;

  const answer2Container = document.createElement("div");
  answer2Container.id = "answer2";
  answer2Container.value = questionAndAnswer.qAndA.answer2.status;
  answer2Container.textContent = questionAndAnswer.qAndA.answer2.content;

  const answer3Container = document.createElement("div");
  answer3Container.id = "answer3";
  answer3Container.value = questionAndAnswer.qAndA.answer3.status;
  answer3Container.textContent = questionAndAnswer.qAndA.answer3.content;

  const answer4Container = document.createElement("div");
  answer4Container.id = "answer4";
  answer4Container.value = questionAndAnswer.qAndA.answer4.status;
  answer4Container.textContent = questionAndAnswer.qAndA.answer4.content;
  console.log(answer4Container);

  answersContainer.appendChild(answer1Container)
  answersContainer.appendChild(answer2Container)
  answersContainer.appendChild(answer3Container)
  answersContainer.appendChild(answer4Container)

  this.container.appendChild(answersContainer)

  answerArray = [answer1Container, answer2Container, answer3Container, answer4Container]

  answersContainer.addEventListener('click', (event) => {
    this.checkIfAnswerCorrect(event.target, answerArray);
  })
};

GameView.prototype.checkIfAnswerCorrect = function (selectedAnswer, answerArray) {
  if (selectedAnswer.value == true) {
    selectedAnswer.classList = "green"
  } else {
    selectedAnswer.classList = "red"
    correctAnswer = answerArray.find(answer => answer.value == true)
    correctAnswer.classList = "green"
  }
};

module.exports = GameView;
