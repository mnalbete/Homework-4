var questionText = document.getElementById("qText");
var answerOne = document.getElementById("answerOne");
var answerTwo = document.getElementById("answerTwo");
var answerThree = document.getElementById("answerThree");
var quizTimer = document.getElementById("timer");
var finalScore = document.getElementById("finalScore");
var highScoreList = document.getElementById("highScoreList");
var questionNumber = 0;
var intervalID;
var questionIndex = 0;
var score;
var finishers = [];

var questions = [
    {
        title: "What year did Disneyland open?",
        choices: ["1965", "1953", "1955", "1947"],
        answer: "1955"
    },
    {
        title: "What is the name of Wendy’s dog in Peter Pan?",
        choices: ["nana", "scruffy", "lulu", "chloe"],
        answer: "nana"
    },
    {
        title: "What is the name of the toy store in Toy Story 2?",
        choices: ["Al's Toy House", "Al's Toys", "Al's Barn of Toys", "Al's Toy Barn"],
        answer: "Al's Toy Barn"
    },
    {
        title: "How many brothers does Prince Hans of the Southern Isles have?",
        choices: ["10", "6", "12", "7"],
        answer: "12"
    },
    {
        title: "What are the names of Cinderella’s stepsisters?",
        choices: ["Anastasia and Drizellant", "Tatyana and Annabelle", "Charlotte and Priscilla", "Brunhilda and Winifred"],
        answer: "Anastasia and Drizellant"
    }];

document.getElementById("storeScore").style.display = "none";


function startQuiz() {
  
    intervalID = setInterval(timer, 1000);
    document.getElementById("instructionPage").style.display = "none";

    displayQuestion();
}

var timeLeft = questions.length * 15;

function timer() {
    timeLeft--;
    quizTimer.textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) {
        clearInterval(intervalID);
    }
};

function displayQuestion() {
    if (questionIndex < questions.length) {
        var questionTitleEl = document.createElement("h1");
        questionTitleEl.textContent = questions[questionIndex].title;
        document.getElementById("questionArea").append(questionTitleEl);
        for (var i = 0; i < questions[questionIndex].choices.length; i++) {
            var button = document.createElement("button");
            button.textContent = questions[questionIndex].choices[i];
            document.getElementById("questionArea").append(button);
            button.addEventListener("click", function (e) {
                console.log(e.target.textContent);
                if (e.target.textContent === questions[questionIndex].answer) {
                    console.log("correct");

                } else {
                    timeLeft -= 15;
                }
                questionIndex++;
                document.getElementById("questionArea").innerHTML = "";
                displayQuestion();
            })
        }
    } else {
        console.log("game over");
        score = timeLeft;
        finalScore.textContent = score;
        console.log(score);
        clearInterval(intervalID);
        document.getElementById("questionArea").style.display = "none";
        quizTimer.style.display = "none";
        document.getElementById("storeScore").style.display = "block";
        document.getElementById("submitScore").addEventListener("click", saveScore);
        // saveScore();
    }

};

function saveScore() {
    // e.preventDefault();
    console.log("submitScore");
    var initials = document.getElementById("initials");
    console.log(initials);
    var currentScore

    if (initials.value === "") {
        alert("Please submit initials.");
    }

    if (initials.value !== "") {
        var playerInitials = initials.value;
        currentScore = "Score: " + timeLeft + " Player Initials: " + playerInitials
        console.log(currentScore);

    }
    finishers.push(currentScore);
    localStorage.setItem("highScoreList", JSON.stringify(finishers));



   


   
}

document.getElementById("startButton").addEventListener("click", function () {
    startQuiz();
});