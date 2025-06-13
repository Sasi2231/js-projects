const minim = 50;
const maxim = 100;
const num = Math.floor(Math.random() * (maxim - minim)+1)+minim
let running = true;
let attempts = 0;
let guess ;  
 while(running){
    guess = window.prompt(`guess the number between ${minim} and ${maxim}`)
    guess = Number(guess)
    if(isNaN(guess)){
        window.alert('you dumb*ss enter the number')

    }
    else if(guess < minim || guess > maxim){
        window.alert(`I said number is in between ${minim} and ${maxim}`)
    }
    else{
        attempts++;
        if(guess > num){
            window.alert('your guess is too high!')

        }
        else if(guess < num){
            window.alert('your guess is too low!')
        }
        else{
            window.alert(`you guessed correct! ${num}.it took ${attempts} attempts`)
            running = false
        }
    }

 }
