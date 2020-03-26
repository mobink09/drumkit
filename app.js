let button = document.querySelectorAll('button');

for(let i = 0; i< button.length; i++){
    button[i].addEventListener('click', ()=> {
       let inTextWord = button[i].innerHTML;
        makeSound(inTextWord);
        animationKey(inTextWord);
    });
}


document.addEventListener('keypress', function(event){
    makeSound(event.key)
    animationKey(event.key);
});







function makeSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
         case 'a':
             let tom2 = new Audio('sounds/tom-2.mp3');
             tom2.play();
         case 's':
             let tom3 = new Audio('sounds/tom-3.mp3');
             tom3.play();
             break;
         case 'd':
             let tom4 = new Audio('sounds/tom-4.mp3');
             tom4.play();
             break;
         case 'j':
             let snare = new Audio('sounds/snare.mp3');
             snare.play();
             break;
         case 'k':
             let crash = new Audio('sounds/crash.mp3');
             crash.play();
             break;
          case 'l':
              let kick = new Audio('sounds/kick-bass.mp3');
              kick.play();
              break;
         
    }

}



function animationKey(currentKey){

     var activeButton = document.querySelector('.'+currentKey);

     activeButton.classList.add('pressed');

     setTimeout(function(){
         activeButton.classList.remove('pressed');
     }, 100)

}




















