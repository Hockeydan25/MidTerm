let triviaQuestion = document.querySelector('#music-question')//
let userSelection = document.querySelector('#users-answer')//
let submitButton = document.querySelector('#submit-button')//
let loadNextButton = document.querySelector('#next-question-button')//
let trueChoice = document.querySelector('#true-choice')//
let falseChoice = document.querySelector('#false-choice')//
let correctAnswer = document.querySelector('#answer')//
let currentQuestion

let questionAndAnswerUrl = `https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=boolean`
// function getNewQuestion => {
//     let triviaQuestion = queston.length
// }
document.addEventListener('keyup', function() {
    if (event.keyCode == 13 || event.key == 'Enter'){    //if statment for eventlistener to take action on if true.
        submitButton.click() //this is the action the enter button takes, cuases a button click function.
    }
})
/* loading the first question fetching the url and getting to the first set of question
and answers object array[0].question.*/ 
fetch(questionAndAnswerUrl) // this returns a promise.
    .then( (res) => {
    return res.json()
    }).then( (questionAndAnswerJson) => {
        currentQuestion = questionAndAnswerJson.results[0]

    let questionText = questionAndAnswerJson.results[0].question
        //console.log(questionText)
        triviaQuestion.innerHTML = questionText
    })

submitButton.addEventListener('click', function() {
     
    let t = document.getElementById("true-choice").checked;
    let f = document.getElementById("false-choice").checked;
    //console.log(t)

    if(!currentQuestion){
        alert('Opps we didn/t ge the question load please pause.')
    }
    currentQuestion 
        console.log(currentQuestion.correct_answer)   
    correctAnswer.innerHTML = currentQuestion.correct_answer

        
    if(t == true && currentQuestion.correct_answer == "True") {//true radio button is checked
        correctAnswer.innerHTML = `You are correct  the answer is: ${currentQuestion.correct_answer}, Great job! Play Agin?`
          //console.log(t)
    }else if(f == true && currentQuestion.correct_answer == "False") {//Falseradio button is checked
            correctAnswer.innerHTML = `You are correct that is the correct: ${currentQuestion.correct_answer}, Great job! Play Agin?`
    }else{
        correctAnswer.innerHTML = `Sorry, that was not the correct answer, the Correct answer is: ${currentQuestion.correct_answer}, please play again!`
      } 

    let errors = []
        //USING THE FUNCTION PUSH TO ENTER IN THE MESSAGE WHERE VALIDATION HAPPENED.
        
        
        if(!t  && !f  ){
        errors.push('Please make a choice')}        
        
        if(errors.length >0 ) {
           let errorMsg = errors.join('\n') //loading the message if length is greater than 0.
           alert(errorMsg)                      
           return  
        }   
    
    
})

loadNextButton.addEventListener('click', function() {
     
    let questionAndAnswerUrl = `https://opentdb.com/api.php?amount=5&category=12&difficulty=easy&type=boolean`

    
})

