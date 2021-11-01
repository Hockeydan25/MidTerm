let triviaQuestion = document.querySelector('#music-question')//variables created for html page selectors grabs element for use and asscoite variables to build our program. 
let userSelection = document.querySelector('#users-answer')
let submitButton = document.querySelector('#submit-button')
let loadNextButton = document.querySelector('#next-question-button')
let trueChoice = document.querySelector('#true-choice')
let falseChoice = document.querySelector('#false-choice')
let correctAnswer = document.querySelector('#answer')
let currentQuestion //global variable we can use in our submitt button to get API call data/values and pull answer object 

// url link for API , where we get questions object
let questionAndAnswerUrl = `https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=boolean`

document.addEventListener('keyup', function() {
    if (event.keyCode == 13 || event.key == 'Enter'){    //if statment for eventlistener to take action on if true.
        submitButton.click() //this is the action the subitt button takes, click or enter button will subitt answer.
    }
})
/* loading the first question fetching the url and getting to the first set of question
and answers object array[0].question.*/ 
fetch(questionAndAnswerUrl) // this returns a promise.
    .then( (res) => {
    return res.json()
    }).then( (questionAndAnswerJson) => {
        let randomQuestion = Math.floor(Math.random() * 10) //random number generated for question slection
        console.log(randomQuestion)
        currentQuestion = questionAndAnswerJson.results[randomQuestion]
        
    let questionText = questionAndAnswerJson.results[randomQuestion].question
        //console.log(questionText)
        triviaQuestion.innerHTML = questionText  //storing the question value.
    })
//  listens for click and starts function call when click, furture events
submitButton.addEventListener('click', function() {
    //setting variable for each true or false radio button. 
    let checkTrue = document.getElementById("true-choice").checked; 
    let checkFalse = document.getElementById("false-choice").checked;
    //console.log(checkTrue)
    currentQuestion 
        console.log(currentQuestion.correct_answer)   
    //getting object element from stored value in currentquestion.

    if(!currentQuestion){
        alert('Opps we didn\'t get the question loaded please pause.')
    } //checking the question loads befoer player tried to answer. Validating the fetch got a question.
    
    //array for errors that may accumilate.
    let errors = []
        //USING THE FUNCTION PUSH TO ENTER IN THE MESSAGE WHERE VALIDATION HAPPENED.
        if(!checkTrue  && !checkFalse  ){  // checking that user did select and answer.
        errors.push('Please make a choice, no button was selected')} 
               //like statement says if more than zero we have to give a message there are errors.Validations.
        if(errors.length >0 ) {
           let errorMsg = errors.join('\n') //loading the message if length is greater than 0.
           alert(errorMsg)                      
           return  
        }   
        submitButton.disabled = true //makesure once a selection is made we can move the process along 
        //vaildatin the choice made with these these if and else statements
    if(checkTrue == true && currentQuestion.correct_answer == "True") {//true radio button is checked
        correctAnswer.innerHTML = `You are correct  the answer is: ${currentQuestion.correct_answer}, Great job! Play Agin?`
          //console.log(t)
    }else if(checkFalse == true && currentQuestion.correct_answer == "False") {//Falseradio button is checked
            correctAnswer.innerHTML = `You are correct that is the correct: ${currentQuestion.correct_answer}, Great job! Play Agin?`
    }else{ 
        correctAnswer.innerHTML = `Sorry, that was not the correct answer, the Correct answer is: ${currentQuestion.correct_answer}, please play again!`
      }     //message to user vaildates correct or not and has them play again.
})
//getting a new question reloaded. Simple way to restart page and new quiestion is load and button is enables again.
loadNextButton.addEventListener('click', function() {
     
    location.reload();
})
//game is either refreshed to a new question or user can cloe browser. 
