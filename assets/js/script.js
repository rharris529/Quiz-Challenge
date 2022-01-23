var main = document.body
var start = document.querySelector("#start-quiz");
var quizNum = document.querySelector("#question-number");
var quizQuestion = document.querySelector("#content");
var quiztimer = document.querySelector("#quiz-timer");

var answer1 = document.getElementById("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var questionOne = ["Triforce of Power", "Triforce of Wisdom", "Triforce of Courage", "Triforce of Strength"];
var questionTwo = ["Epona", "Agro", "Seabiscuit", "Shadowmere"];
var questionThree = ["A + L + R + Start", "A, B, A, C, A, B, B", "Down, Forward + Punch", "Up, Up, Down, Down, Left, Right, Left, Right, B, A"];
var questionFour = ["Bullymongs", "Stairs", "Magnets", "It's own hubris"];
var questionFive = ["Reese's Pieces", "Kool Aid", "Friendship", "Phones"];

function countdown () {
    var timeLeft = 60;

    quiztimer.innerHTML = timeLeft

    var timer = setInterval(function(){

        if (timeLeft === 0) {
            alert("Time's Up!");
            // "timer" will decrease by 1
            timeLeft--;
        } else if (timeLeft > 1) {
            timeLeft--;
        }
    }, 1000);

    console.log(timer);
};

var QuizStart = function() {
    
}

start.addEventListener("click", countdown, QuizStart);

countdown();