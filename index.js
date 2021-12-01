'use strick'

for(let i = 0; i<document.querySelectorAll('button').length; i++){

document.querySelectorAll('.drum')[i].addEventListener('click', () =>{
    if (i === 0){
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