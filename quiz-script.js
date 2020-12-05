var currentQuestion = 0;
var score = 0;
var totQuestions = question.length;

var container = document.getElementbyId('quizContainer');
var questionEl = document.getElementbyId('question');
var opt1 = document.getElementbyId('opt1');
var opt2 = document.getElementbyId('opt2');
var opt3 = document.getElementbyId('opt3');
var opt4 = document.getElementbyId('opt4');
var nextButton = document.getElementbyId('nextbutton');
var resultCont = document.getElementbyId('result');

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionsEl.textContent = (questionIndex + 1) + '. ' + q.questions;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('please select your answer!');
		return;

	}
	var answer = selectedOption.value;
	if(questions[currentquestion].answer == answer){
		score += 5;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions -1){
        nextbutton.textContent = 'finish';
	}
    if(currentquestion == totQuestions){
    	container.style.display = 'none';
    	resultCont.style.display = '';
    	resultCont.textContent = 'Your Score: ' + score;
    	return;
    }
    loadQuestion(currentQuestion);


loadQuestion(currentQuestion);