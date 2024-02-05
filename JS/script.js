const running = document.querySelector('.running');
const pinkFlower = document.querySelector('.pinkFlower');

let jumpCount = 0;  
let gameActive = true;


const jump = () => {
    if (!gameActive) return;

    running.classList.add('jump');

    setTimeout(() => {

        running.classList.remove('jump');

    }, 800);

    jumpCount++;
    document.getElementById('jumpCounter').innerText = `Score: ${jumpCount}`;
}



const loop = setInterval(() =>{

    const pinkFlowerPosition =  pinkFlower.offsetLeft; 
    const runningPosition = +window.getComputedStyle(running).bottom.replace('px', '');


    if(pinkFlowerPosition <= 120 && runningPosition < 100){

        pinkFlower.style.animation = 'none';
        pinkFlower.style.left = `${pinkFlowerPosition}px`; //propria posição do deslocamento esquerdo

        running.style.animation = 'none';
        running.style.left = `${runningPosition}px`;

        clearInterval(loop);

        document.getElementsByClassName('gameOver')[0].style.visibility = 'visible';

        gameActive = false;             
    }

}, 10)


document.addEventListener('keydown', jump);