const minim = 50;
const maxim = 100;
const num = Math.floor(Math.random() * (maxim - minim)+1)+minim
let running = true;
let attempts = 0;
let guess ;  
let result ;
function strguess(){
 while(running){
    let guess = document.getElementById("myGuess").Value
    guess = Number(guess)
    if(guess < minim || guess > maxim){
        result.textContent = `enter between &{maxim} and &{minim}`
    }
    else{
        attempts++;
        if(guess > num){
            result.textContent = 'your guess is too high!'

        }
        else if(guess < num){
            result.textContent = 'your guess is too low!'
        }
        else{
            result.textContent = `you guessed correct! ${num}.it took ${attempts} attempts`
            running = false
        }
    }

 }
}