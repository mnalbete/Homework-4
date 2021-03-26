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
  
    document.getElementById("questionText").innerHTML = questionObj.question;
    document.getElementById("answerOne").innerHTML = questionObj.answerOne;
    document.getElementById("answerTwo").innerHTML = questionObj.answerTwo;
    document.getElementById("answerThree").innerHTML = questionObj.answerThree;
    document.getElementById("answerFour").innerHTML = questionObj.answerFour;
});
