let inputField = document.querySelector('#inputField')
let resultsText = document.querySelector('#resultsText')
let submitButton = document.querySelector('#submitButton')
let body = document.querySelector('body')
let instructions = document.querySelector('#instructions')
let startQuiz = document.querySelector('#startQuiz')
let resultsButton = document.querySelector('#resultsButton')


//Setting up Class for questions and putting a group of said questions into an array.
class Questions{
   constructor(prompt, answer){
          this.prompt = prompt;
          this.answer = answer;
   }

}

let q1 = new Questions ("What is the capital of France?", "paris")
let q2 = new Questions ("How many in a bakers dozen?", 13)
let q3 = new Questions ("Who won the 2022 World Cup?", "argentina")
let q4 = new Questions ("How many chambers does the human heart have?", 4)
let q5 = new Questions ("Who is Nintendo's famous plumber mascot?", "mario")
let q6 = new Questions ("What country holds the Taj Mahal?", "india")
let q7 = new Questions ("When was the Irish Easter Rising?", 1916)
let q8 = new Questions ("How many players on a standard football team?", 11)
let q9 = new Questions ("Where is the cochlea located in the human body?", "ear")
let q10 = new Questions ("How many questions were there in this quiz (including this one)?", 10)
let q11 = new Questions ("Congratulations on finishing the quiz, Please click the button below to display your results!", "")

var Question = new Array(q1, q2 ,q3 ,q4 ,q5 ,q6 ,q7 ,q8 ,q9 , q10, q11)

//Ill be using the turn feature as a way to move the questions along.
let turn = 0;

//Function to check if the answer was correct, add a point to the score and move the questions along.
//I have it set so that buttons mentioed in the Index.html can dynamically hide and reveal the seperate sections of the quiz
function checkAnswer(e) {
    e.preventDefault()
   currentQuestion = Question[turn];
   currentPrompt = Question[turn+1];
   instructions.innerHTML = currentPrompt.prompt;
   currentAnswer = currentQuestion.answer;
   
if (inputField.value == currentAnswer) {
    resultsText.innerHTML = "Correct!"
    body.style.backgroundColor = "green"
    turn += 1
    crctScore++;
    correctScore.innerHTML="Your Current Score is " + crctScore;
    console.log(turn)
    if (turn==10){
        document.getElementById("inputField").style.display="none";
        document.getElementById("submitButton").style.display="none";
        document.getElementById("correctScore").style.display="none";
        document.getElementById("resultsText").style.display="none";
        document.getElementById("resultsButton").style.display="block";
    
    }
}
else {
    resultsText.innerHTML ="Wrong!"
    body.style.backgroundColor = "red"
    turn += 1
    console.log(turn)
    if (turn==10){
        document.getElementById("inputField").style.display="none";
        document.getElementById("submitButton").style.display="none";
        document.getElementById("correctScore").style.display="none";
        document.getElementById("resultsText").style.display="none";
        document.getElementById("resultsButton").style.display="block";
    
    }
}
}

var correctScore = document.getElementById("correctScore");
var crctScore = 0;
//Funtion to display results upon finishing the quiz
function getResults(){
    results.innerHTML = "Your final score was " + crctScore;
 if(crctScore <= 3){
     document.getElementById('bronze').style.display="block"
 }
 else if(crctScore <= 7){
    document.getElementById('silver').style.display="block"
 }
 else if(crctScore == 10){
    document.getElementById('gold').style.display="block"
 }
}

//Funtion to start the quiz by hiding inital instructions and displaying the actual quiz
function beginQuiz(){
    document.getElementById('startupPrompt').style.display="none"
    document.getElementById('startQuiz').style.display="none"
    document.getElementById('quizLayout').style.display="block"
    document.getElementById('correctScore').style.display="block"
    
}

 
submitButton.onclick = checkAnswer
startQuiz.onclick = beginQuiz
resultsButton.onclick = getResults


//Made it so on load the elements I need are displayed and that the quiz loads on opening making it so I dont have to have an inital question in the HTMl
window.onload = function initialStartup(){
    currentQuestion = Question[turn];
   currentAnswer = currentQuestion.answer;
   instructions.innerHTML = currentQuestion.prompt;
   document.getElementById('quizLayout').style.display="none"
   document.getElementById('correctScore').style.display="none"
   document.getElementById('resultsButton').style.display="none"
   document.getElementById('bronze').style.display="none"
   document.getElementById('silver').style.display="none"
   document.getElementById('gold').style.display="none"
 
}

 
 


