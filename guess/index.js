const minrange = 50;
const maxrange = 100;
const randomguess = Math.floor(Math.random() * (maxrange - minrange)) + minrange
let result = document.getElementById("result")

function strguess(){
        const guess = document.getElementById("myGuess").value
        if (guess > randomguess){
            result.textContent = "You're guess is too high!"
        }
        else if(guess < randomguess){
            result.textContent = "You're guess is too low!"
        }
        else{
            result.textContent = "You guessed it correct!"
        }
  }
