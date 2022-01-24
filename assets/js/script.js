var start = document.getElementById("start-quiz");
var quizNum = document.getElementById("question-number");
var quizQuestion = document.getElementById("content");
var quiztimer = document.getElementById("quiz-timer");
var timeLeft = 50;
var listEl = document.createAttribute("li");
var score = document.getElementById("your-Score");
var saveInitial = document.getElementById("save-score");

var button1 = document.getElementById("answer1");
var button2 = document.getElementById("answer2");
var button3 = document.getElementById("answer3");
var button4 = document.getElementById("answer4");

// question answers are represented as arrays, to be called later
var questionOne = ["Triforce of Power", "Triforce of Wisdom", "Triforce of Courage", "Triforce of Strength"];
var questionTwo = ["Epona", "Agro", "Seabiscuit", "Shadowmere"];
var questionThree = ["A + L + R + Start", "A, B, A, C, A, B, B", "Down, Forward + Punch", "Up, Up, Down, Down, Left, Right, Left, Right, B, A"];
var questionFour = ["Bullymongs", "Stairs", "Magnets", "It's own hubris"];
var questionFive = ["Reese's Pieces", "Kool Aid", "Friendship", "Phones"];

function countdown () {

    var timer = setInterval(function(){
        if (timeLeft > -1) {
            // Displays timer on HTML 
            quiztimer.innerHTML = "Time:" + timeLeft;
            // timer will decrease by 1 every second
            timeLeft--;
        } else if (timeLeft === -1) {
            // when quizStart function ends, user will be transported to highscores page
            clearInterval(timeLeft);
            endGame();
        }
        if (quiz5 === true) {
            endGame();
        }
        return false;
    }, 1000);      
};

// Each quiz question will represented as its own function, user cannot proceed to next question without giving an answer to the preceding question
var quiz1 = function() {

    // These values are inserted into corresponding HTML once the pages/function loads
    quizNum.innerHTML = "Question #1:";
    quizQuestion.innerHTML = "Link, from Legend of Zelda, bears the Triforce of which power?";
    button1.innerHTML = questionOne[0];
    button2.innerHTML = questionOne[1];
    button3.innerHTML = questionOne[2];
    button4.innerHTML = questionOne[3];

    // correct answer function
    button3.onclick = function() {
        if (true) {
            console.log("Correct!");
            // will proceed to next question once button is clicked
            quiz2();
        }
        return false;
    };

    // incorrect answer function(s)
    button1.onclick = function() {
        if (true) {
            // when user clicks wrong answer, timer will subtract 10 from timeLeft value
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            // will still proceed to next question once button is clicked
            quiz2();
        }
        return false;
    }

    button2.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz2();
        }
        return false;
    }

    button4.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz2();
        }
        return false;
    }
}; 

var quiz2 = function() {
    // previous questions values are replaced once new function has loaded
    quizNum.innerHTML = "Question #2:";
    quizQuestion.innerHTML = "What is name of Wander's horse in Shadow of the Colossus?";
    button1.innerHTML = questionTwo[0];
    button2.innerHTML = questionTwo[1];
    button3.innerHTML = questionTwo[2];
    button4.innerHTML = questionTwo[3];

    button2.onclick = function() {
        if (true) {
            console.log("Correct!");
            quiz3();
        }
        return false;
    }

    button1.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz3();
        }
        return false;
    }

    button3.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz3();
        }
        return false;
    }

    button4.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz3();
        }
        return false;
    }
};

var quiz3 = function() {

    quizNum.innerHTML = "Question #3:";
    quizQuestion.innerHTML = "Which is the famous Konami Code?";
    button1.innerHTML = questionThree[0];
    button2.innerHTML = questionThree[1];
    button3.innerHTML = questionThree[2];
    button4.innerHTML = questionThree[3];

    button4.onclick = function() {
        if (true) {
            console.log("Correct!");
            quiz4();
        }
        return false;
    }

    button1.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz4();
        }
        return false;
    }

    button2.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz4();
        }
        return false;
    }

    button3.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz4();
        }
        return false;
    }

};

var quiz4 = function() {

    quizNum.innerHTML = "Question #4:";
    quizQuestion.innerHTML = "In the Borderlands series, what is CL4P-TP (Claptrap)'s greatest enemy?";
    button1.innerHTML = questionFour[0];
    button2.innerHTML = questionFour[1];
    button3.innerHTML = questionFour[2];
    button4.innerHTML = questionFour[3];

    button2.onclick = function() {
        if (true) {
            console.log("Correct");
            quiz5();
        }
        return false;
    }

    button1.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz5();
        }
        return false;
    }

    button3.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz5();
        }
        return false;
    }

    button4.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            quiz5();
        }
        return false;
    }

};

var quiz5 = function() {

    quizNum.innerHTML = "Question #5:";
    quizQuestion.innerHTML = "In ET for the Atart 2600, what must ET collect in order to keep his energy up?";
    button1.innerHTML = questionFive[0];
    button2.innerHTML = questionFive[1];
    button3.innerHTML = questionFive[2];
    button4.innerHTML = questionFive[3];
    
    // Since this is the final question, proceed to endGame function
    button1.onclick = function() {
        if (true) {
            console.log("Correct");
            // stop timer once question is clicked
            clearInterval(timeLeft);
            endGame();
        }
        return false;
    }
    button2.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            // will still stop timer after subtracting for incorrect answer
            clearInterval(timeLeft);
            endGame();
        }
        return false;
    }

    button3.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            clearInterval(timeLeft);
            endGame();
        }
        return false;
    }

    button4.onclick = function() {
        if (true) {
            timeLeft = timeLeft - 10;
            console.log("Wrong!");
            clearInterval(timeLeft);
            endGame();
        }
        return false;
    }
};

var endGame = function() {
    
}

var postHighScores = function () {
    listEl.textContent = localStorage.setItem(timeLeft, JSON.stringify(timeLeft));
};


countdown();
quiz1();
endGame();
postHighScores();