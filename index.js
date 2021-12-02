'use strick'

const keyPress = document.addEventListener('keypress',function(event){
    if (event.key === "w"){
        const music = new Audio('sounds/crash.mp3');
        music.play();
    }else if (event.key === "a"){
        const music = new Audio('sounds/kick-bass.mp3');
        music.play();
    }else if (event.key === "s"){
        const music = new Audio('sounds/snare.mp3');
        music.play();
    }else if (event.key === "j"){
        const music = new Audio('sounds/tom-1.mp3');
        music.play();
    }else if (event.key === "d"){
        const music = new Audio('sounds/tom-2.mp3');
        music.play();
    }else if (event.key === "l"){
        const music = new Audio('sounds/tom-3.mp3');
        music.play();
    }else if (event.key === "k"){
        const music = new Audio('sounds/tom-4.mp3');
        music.play();
    }
});
for(let i = 0; i<document.querySelectorAll('button').length; i++){

document.querySelectorAll('.drum')[i].addEventListener('click', () =>{
    if (i === 0 ||keyPress === 2){
        const music = new Audio('sounds/crash.mp3');
        music.play();
        // document.getElementById('w').style.width = '200px'
    } else if(i===1){
        const music = new Audio('sounds/kick-bass.mp3');
        music.play();
    } else if(i===2){
        const music = new Audio('sounds/snare.mp3');
        music.play();
    }else if(i===3){
        const music = new Audio('sounds/tom-1.mp3');
        music.play();
    }else if(i===4){
        const music = new Audio('sounds/tom-2.mp3');
        music.play();
    }else if(i===5){
        const music = new Audio('sounds/tom-3.mp3');
        music.play();
    }else if(i===6){
        const music = new Audio('sounds/tom-4.mp3');
        music.play();
    }
});
}
