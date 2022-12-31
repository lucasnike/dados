let dice_sound = new Audio('./assets/dice.mp3')
let dado = document.getElementById("dado");

const addClassC = (e) => {
   e.forEach(a => {
      a.className = 'c'
   })
}

function diceAnimation() {
   let max = 6, min = 1;

   let element = document.querySelectorAll('.c');
   let randomNumber = parseInt(Math.random() * (max - min + 1) + min);

   // setTimeout(() => {
   //    addClassC(element)
   //    element[0].className = 'circleLoading c'
   //    element[6].className = 'circleLoading c'
   // }, 100)



   // setTimeout(() => {

   //    addClassC(element)
   //    element[0].className = 'circleLoading c'
   //    element[1].className = 'circleLoading c'
   //    element[2].className = 'circleLoading c'
   //    element[5].className = 'circleLoading c'
   //    element[6].className = 'circleLoading c'
   //    element[4].className = 'circleLoading c'
   // }, 200)



   // setTimeout(() => {
   //    addClassC(element)

   //    element[0].className = 'circleLoading c'
   //    element[1].className = 'circleLoading c'
   //    element[6].className = 'circleLoading c'
   //    element[5].className = 'circleLoading c'
   // }, 350)

   // setTimeout(() => {
   //    addClassC(element)

   //    element[3].className = 'circleLoading c'
   // }, 400)



   // setTimeout(() => {
   //    addClassC(element)

   //    element[0].className = 'circleLoading c'
   //    element[3].className = 'circleLoading c'
   //    element[6].className = 'circleLoading c'
   // }, 550)

   setTimeout(() => {
      dado.style.display = 'none'
   }, 400);
   
   
   setTimeout(() => {
      
      addClassC(element)
      
      
      if (randomNumber == 1) {
         element[3].className = 'circle c'
      } if (randomNumber == 2) {
         element[0].className = 'circle c'
         element[6].className = 'circle c'
      } if (randomNumber == 3) {
         element[0].className = 'circle c'
         element[3].className = 'circle c'
         element[6].className = 'circle c'
      } if (randomNumber == 4) {
         element[0].className = 'circle c'
         element[1].className = 'circle c'
         element[6].className = 'circle c'
         element[5].className = 'circle c'
      } if (randomNumber == 5) {
         element[0].className = 'circle c'
         element[1].className = 'circle c'
         element[6].className = 'circle c'
         element[5].className = 'circle c'
         element[3].className = 'circle c'
      } if (randomNumber == 6) {
         element[0].className = 'circle c'
         element[1].className = 'circle c'
         element[2].className = 'circle c'
         element[5].className = 'circle c'
         element[6].className = 'circle c'
         element[4].className = 'circle c'
      }
      
      dado.style.display = 'grid'
   }, 600)
   
   dice_sound.play()
}