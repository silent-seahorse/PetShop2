var app = {};

app.questions = [];
app.answers = [];
app.questions.push("1 + 1");
app.questions.push("2 + 2");
app.questions.push("3 + 3");
app.questions.push("4 + 4");
app.questions.push("5 + 5");
app.answers.push(2, 4, 6, 8, 10);

var questionIndex = 0;
var totCorrect = 0;
var totIncorrect = 0;
var score = 0;
var progress = 0;
document.getElementById("progressBar").style.width = '0%';
document.getElementById("progressBar").innerHTML.value = 'Progress';

// document.getElementById("progressBar").innerHTML.value = progress + "%";


app.displayQuestion = function () {
    if (questionIndex < app.questions.length) {
        document.getElementById("startQuiz").innerHTML = "";
        document.getElementById("displayQuestion").innerHTML = app.questions[questionIndex];
        document.getElementById("userAnswer").value = "";
        document.getElementById("displayResult").innerHTML = "";
    }

};

app.checkProblem = function () {
    if (document.getElementById("userAnswer").value == app.answers[questionIndex]) {
        document.getElementById("displayResult").innerHTML = "Correct!";
        totCorrect++;
        //          "<i class='fa fa-thumbs-o-up'></i>"
    } else {
        document.getElementById("displayResult").innerHTML = "Nope!";
        totIncorrect++;
    };
    questionIndex++;

    if (questionIndex < app.questions.length) {
        document.getElementById("startQuiz").innerHTML = "Next Question";
    } else {
        app.gradeQuiz();
    };
    progress = questionIndex / app.questions.length * 100;
    document.getElementById("progressBar").innerHTML = progress + "%";
    document.getElementById("progressBar").style.width = progress + "%";

};

app.gradeQuiz = function () {
    document.getElementById("displayQuestion").innerHTML = "";
    document.getElementById("userAnswer").value = "";
    document.getElementById("userAnswer").placeholder = "";
    document.getElementById("displayResult").innerHTML = "";

    score = totCorrect / app.questions.length
    displayScore = (score * 100) + "%";
    document.getElementById("startQuiz").innerHTML = "Your score is " + displayScore;
};