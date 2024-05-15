'use strict';
let seconds=10;
const button=document.querySelector('.button');
const h1=document.querySelector('#count');
button.addEventListener('click',function(){
    clearInterval(countdown);
    console.log('Hai fermato il countdown');
})
const countdown= setInterval(function(){
    if(seconds===0){
        console.log('BUON ANNO');
        h1.innerText='BUON ANNO';
        clearInterval(countdown); 
    }
    else{
        console.log(seconds);
        h1.innerText=seconds;
        seconds--;
    }
},1000); 