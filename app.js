var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: 'scprit',
        option2: 'javascrip',
        option3: 'js',

        correctOption: 'script',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: 'scripr href="xxx.js"',
        option2: 'scripr name="xxx.js"',
        option3: 'scripr src="xxx.js"',
        correctOption: 'scripr src="xxx.js"',
    }]


var index = 0
var nextBtn = document.getElementById("Next")
function showQuestions() {
    var options = document.getElementsByName("option")
    nextBtn.disabled = true
    var questionBox = document.getElementById("questionBox")
    questionBox.innerHTML = `<p>${questions[index].question}</p>
        <label>
            <input type="radio"   name="option" value="${questions[index].option1}" >
            ${questions[index].option1}
        </label>
        <br>
        <label>
            <input type="radio" name="option" value="${questions[index].option2}" >
                  ${questions[index].option2}
        </label>
        <br>
        <label>
            <input type="radio" name="option" value="${questions[index].option3}" >
             ${questions[index].option3}
        </label>

`
    index++;


    // enabling next Btn
    for (var i = 0; i < options.length; i++) {

        if (options[i].checked) {
            console.log(options[i].value);

        }

        options[i].addEventListener("click", function () {
            nextBtn.disabled = false
        })

    }
}

showQuestions()
