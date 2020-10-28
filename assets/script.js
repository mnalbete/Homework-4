// need a timer on top right to show the time the quiz ends
// timer starts at when you press the button on the quiz

var myVar = setInterval(myTimer, 1000);
var timerSeconds = 100;
function myTimer() {
    timerSeconds--;
    document.getElementById("timer").innerHTML = timerSeconds;
}
var questionObj = {
    question: "this is my first question",
    answerOne: "this is the first answer",
    answerTwo: "this is the second answer",
    answerThree: "this is the third answer",
}
//start button if clicked display first question
document.getElementById("startButton").addEventListener("click",function(e){
    console.log(questionObj.question)
    console.log(e.target.textContent) 
    // display the first question and the answer choices
    document.getElementById("questionText").innerHTML = questionObj.question;
    document.getElementById("answerOne").innerHTML = questionObj.answerOne;
    document.getElementById("answerTwo").innerHTML = questionObj.answerOne; 
    })


//need a user select from user choices 
    //  four buttons for the answers
    // create button tags for our answers
    // append to DOM    

// event listeners

// right or wrong answers displayed after every question
    // a few seconds show the right or wrong answer at the bottom of the quiz

// score at the end of quiz to see how you did 