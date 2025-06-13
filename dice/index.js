const mybutton = document.getElementById("mybutton");
let myrand = document.getElementById('myrand');
const min = 1;
const max = 6;
let randomnum;
 function random(){
    randomnum = Math.floor(Math.random()*max)+min;
    myrand.textContent = randomnum;
 }