const textbox = document.getElementById('textbox');
const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const result = document.getElementById("result");
let temp;

function convert(){

    if(toFahrenheit.checked){
        result.textContent = "you selected Fahrenheit";
        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "\u00B0F";
    }
    else if(toCelsius.checked){
        result.textContent = "you selected Celsius";
        temp = Number(textbox.value);
        temp = (temp - 32) * (5/9);
        result.textContent = temp.toFixed(1) + "\u00B0C"
    }
    else{
        result.textContent = "Select a unit";
    }
}