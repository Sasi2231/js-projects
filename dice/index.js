function rolldice(){
   const dicevalue = document.getElementById("numofdice").value
   const result = document.getElementById("result");
   const diceimages = document.getElementById("diceimages");
   const values = [];
   const images = [];

   for(i=0; i < dicevalue; i++){
      const value = Math.floor(Math.random() * 6) + 1
      values.push(value)
      images.push(`<img src="assets/num${value}.jpg" alt="Dice ${value}" style="width:50px;height:50px;margin:5px;">`)
   }
   result.textContent = `Dice:${values.join(', ')}`
   diceimages.innerHTML = images.join(' ')
}