let triviaQuestion = document.querySelector('#music-question')
let userSelection = document.querySelector('#user-answer')
let submitButton = document.querySelector('#submit-button')
let loadNextButton = document.querySelector('#next-question-button')
let trueChoice = document.querySelector('#true-choice')
let falseChoice = document.querySelector('#false-choice')
let correctAnswer = document.querySelector('#answer')

let questionAndAnswerApi = `https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=boolean`

// function getNewQuestion => {
//     let triviaQuestion = queston.length


// }
// document.addEventListener('keyup', function() {
//     if (event.keyCode == 13 || event.key == 'Enter'){    //if statment for eventlistener to take action on if true.
//         submitButton.click() //this is the action the enter button takes, cuases a button click function.
//     }
// })
/* loading the first question fetching the url and getting to the first set of question
and answers object array[0].question.if i refresh the page it loads a new set*/ 
fetch(questionAndAnswerApi)
    .then( (res) => {
    return res.json()
    }).then( (questionAndAnswerJson) => {

    let questionArray = questionAndAnswerJson.results[0].question
        //console.log(questionArray)
        triviaQuestion.innerHTML = questionArray


    })    
// submitButton.addEventListener('click', function() {
    
    
    
// } )

// loadNextButton.addEventListener('click', function() {

    //.toggle("selected")
// })

