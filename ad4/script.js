window.addEventListener('deviceorientation', onMobileMove);
let score = Date.now();
let speedX = 0;
let speedY = 0;
let ball = document.querySelector('#ball');
let hole = document.querySelector('#hole');
let flag = false;
AppInit();

function onMobileMove(ev){
    speedX = ev.alpha/30;
    speedY = ((ev.beta - 90)%180)/30;
    
}
function CheckCollision($hole, $ball){
    let x1 = $hole.offsetLeft;
    let y1 = $hole.offsetTop;
    let width1 = $hole.offsetWidth;
    let height1 = $hole.offsetHeight;
    
    let x2 = $ball.offsetLeft;
    let y2 = $ball.offsetTop;

    if(x1 < x2 && x2 < (x1+width1) && y1 < y2 && y2 < (y1 +height1))
        return false;
    return true;
}

function MoveBall(){
    const left = parseFloat(ball.style.left.substring(0, ball.style.left.length-2));
    const top = parseFloat(ball.style.top.substring(0, ball.style.top.length-2));

    ball.style.left = left + speedX + 'px';
    ball.style.top = top + speedY + 'px';
    
    if(CheckCollision(hole, ball) != true && flag == false){
        let time = (Date.now()- score)/1000 + 's';
        flag = true;
        alert('Completed in: ' + time);
    }


    requestAnimationFrame(MoveBall);

}

function AppInit(){
    const ballStartXPos = Math.random() * window.innerWidth;
    const ballStartYPos = Math.random() * window.innerHeight;
    const holeStartXPos = Math.random() * window.innerWidth;
    const holeStartYPos = Math.random() * window.innerWidth;
    ball.style.left = ballStartXPos + 'px';
    ball.style.top = ballStartYPos + 'px';
    hole.style.left = holeStartXPos + 'px';
    hole.style.top = holeStartYPos + 'px';
    MoveBall();
}


