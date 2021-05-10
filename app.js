// Game function
// - player must guess a number between a min and max 
// - player gets a certain amount of guesses 
// - notify players of guesses remaining 
// - notify player of the correct answer if lose 
// - let player choose to play again 

// Game Values
let min = 2,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input')
      message = document.querySelector('.message')

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);

    //Validate
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }
    //Check if won
    else if (guess === winningNum){
        // Game over - won

        guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = 'green'
        // Set Message
        setMessage(`${winningNum} is correct, YOU WIN !`, 'green')
    } else {
        //Wrong Number
        guessesLeft -= 1
        if(guessesLeft === 0){
            // Game over - lost
            guessInput.disabled = true;
            // change border color
            guessInput.style.borderColor = 'red'
             // Set Message
            setMessage(`Game Over you lost, the correct number is ${winningNum} !`, 'red')

        } else {
            // Game continues - answer wrong

            // change border color
            guessInput.style.borderColor = 'red'

            // Clear Input
            guessInput.value = '';

            // Tell user it's the wrong guess
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left !`, 'red')
        

        }

}})

// Set Message
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}