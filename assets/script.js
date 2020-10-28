// need a timer on top right to show the time the quiz ends
// timer starts at when you press the button on the quiz

//start button if clicked display first question





document.getElementById("startButton").addEventListener("click", function (e) {
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
        answerFour: "this is the forth answer",
    }
    var questionObj = {
        question: "this is my first question",
        answerOne: "this is the first answer",
        answerTwo: "this is the second answer",
        answerThree: "this is the third answer",
        answerFour: "this is the forth answer",
    }
    var questionObj = {
        question: "this is my first question",
        answerOne: "this is the first answer",
        answerTwo: "this is the second answer",
        answerThree: "this is the third answer",
        answerFour: "this is the forth answer",
    }


    console.log(questionObj.question)
    console.log(e.target.textContent)
    // display the first question and the answer choices
    document.getElementById("questionText").innerHTML = questionObj.question;
    document.getElementById("answerOne").innerHTML = questionObj.answerOne;
    document.getElementById("answerTwo").innerHTML = questionObj.answerTwo;
    document.getElementById("answerThree").innerHTML = questionObj.answerThree;
    document.getElementById("answerFour").innerHTML = questionObj.answerFour;
})





//need a user select from user choices 
    //  four buttons for the answers
    // create button tags for our answers
    // append to DOM    

// event listeners

// right or wrong answers displayed after every question
    // a few seconds show the right or wrong answer at the bottom of the quiz

// score at the end of quiz to see how you did 