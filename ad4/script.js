window.addEventListener('deviceorientation', onMobileMove);
let score = 0;
let holes = [];
let speedX = 0;
let speedY = 0;
let ball = document.querySelector('#ball');
AppInit();

function onMobileMove(ev){
    speedX = ev.alpha / 30;
    speedY = ev.beta / 30;
}

function MoveBall(){
    ball.style.left = ball.style.left + speedX + 'px';
    ball.style.top = ball.style.top + speedY + 'px';

}

function AppInit(){
    const ballStartXPos = Math.random() * window.innerWidth;
    const ballStartYPos = Math.random() * window.innerHeight;

    ball.style.left = ballStartXPos + 'px';
    ball.style.top = ballStartYPos + 'px';
    MoveBall();
}