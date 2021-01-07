document.body.addEventListener('keydown', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtn);
document.querySelector('#playBtn').addEventListener('click', onPlayBtn);
document.querySelector('#recordBtn2').addEventListener('click', onRecordBtn2);
document.querySelector('#playBtn2').addEventListener('click', onPlayBtn2);
document.querySelector('#recordBtn3').addEventListener('click', onRecordBtn3);
document.querySelector('#playBtn3').addEventListener('click', onPlayBtn3);
document.querySelector('#recordBtn4').addEventListener('click', onRecordBtn4);
document.querySelector('#playBtn4').addEventListener('click', onPlayBtn4);

let recordStartTime;
let recordStartTime2;
let recordStartTime3;
let recordStartTime4;
let recordedSound = [];
let recordedSound2 = [];
let recordedSound3 = [];
let recordedSound4 = [];
let recording1 = false;
let recording2 = false;
let recording3 = false;
let recording4 = false;

let code = 0;
function onKeyPress(ev){
    let soundId;
    switch (ev.code){
    case 'KeyA':
        
        if(code == 9)
        {
            soundId = 'secret';
            console.log('Secret Found');
        }
        else {
            soundId = 'boom';
        }
        
        code = 0;
        break;
    case 'KeyS':
        soundId = 'clap';
        code = 0;
        break;
    case 'KeyD':
        soundId = 'hihat';
        code = 0;
        break;
    case 'KeyF':
        soundId = 'kick';
        code = 0;
        break;
    case 'KeyG':
        soundId = 'openhat';
        code = 0;
        break;
    case 'KeyH':
        soundId = 'ride';
        code = 0;
        break;
    case 'KeyJ':
        soundId = 'snare';
        code = 0;
        break;
    case 'KeyK':
        soundId = 'tink';
        code = 0;
        break;
    case 'KeyL':
        soundId = 'tom';
        code = 0;
        break;
    case 'ArrowUp':
        if(code == 0 || code == 1)
        {
            code++;
        } else {
            code = 0;
        }
        break;
    case 'ArrowDown':
        if(code == 2 || code == 3)
        {
            code++;
        } else {
            code = 0;
        }
        break;
    case 'ArrowLeft':
        if(code == 4 || code == 6)
        {
            code++;
        } else {
            code = 0;
        }
        break;
    case 'ArrowRight':
        if(code == 5 || code == 7)
        {
            code++;
        } else {
            code = 0;
        }
        break;
    case 'KeyB':
        if(code == 8)
        {
            code++;
        } else {
            code = 0;
        }
        break;
    default:
        code = 0;
        break;
    }

    if(soundId){
       
        const sound = document.querySelector('#'+ soundId);
        
        
        const imageId = document.querySelector('#' + soundId + 'Img');
        imageId.classList.toggle('animated');
        
        sound.play();
        if(recording1){
            soundTime = Date.now() - recordStartTime;
            let soundObj = {
                soundId: soundId,
                time: soundTime
            }
           

            recordedSound.push(soundObj);
        }
        if(recording2){
            soundTime = Date.now() - recordStartTime2;
            let soundObj = {
                soundId: soundId,
                time: soundTime
            }
            
            recordedSound2.push(soundObj);
        }
        if(recording3){
            soundTime = Date.now() - recordStartTime3;
            let soundObj = {
                soundId: soundId,
                time: soundTime
            }
            
            recordedSound3.push(soundObj);
        }
        if(recording4){
            soundTime = Date.now() - recordStartTime4;
            let soundObj = {
                soundId: soundId,
                time: soundTime
            }
            
            recordedSound4.push(soundObj);
        }
        
        
        
        imageId.classList.toggle('animated');
    }
    
}

function onRecordBtn(){
    recordStartTime = Date.now();
    recording1 = true;
    recordedSound = [];
}

function onPlayBtn(){
    recording1 = false;
    for(let index=0; index < recordedSound.length; index++){
        const soundObj = recordedSound[index];
        
        
        setTimeout(()=> {
            playSound(soundObj.soundId);
        }, soundObj.time
            
        );
        
    }
}

function onRecordBtn2(){
    recordStartTime2 = Date.now();
    recording2 = true;
    recordedSound2 = [];
}

function onPlayBtn2(){
    recording2 = false;
    for(let index=0; index < recordedSound2.length; index++){
        const soundObj = recordedSound2[index];
        
        
        setTimeout(()=> {
            playSound(soundObj.soundId);
        }, soundObj.time
            
        );
        
    }
}

function onRecordBtn3(){
    recordStartTime3 = Date.now();
    recording3 = true;
    recordedSound3 = [];
}

function onPlayBtn3(){
    recording3 = false;
    for(let index=0; index < recordedSound3.length; index++){
        const soundObj = recordedSound3[index];
        
        
        setTimeout(()=> {
            playSound(soundObj.soundId);
        }, soundObj.time
            
        );
        
    }
}


function onRecordBtn4(){
    recordStartTime4 = Date.now();
    recording4 = true;
    recordedSound4 = [];
}

function onPlayBtn4(){
    recording4 = false;
    for(let index=0; index < recordedSound4.length; index++){
        const soundObj = recordedSound4[index];
        
        
        setTimeout(()=> {
            playSound(soundObj.soundId);
        }, soundObj.time
            
        );
        
    }
}


function playSound(soundId){
    const sound = document.querySelector('#' + soundId);
    const imageId = document.querySelector('#' + soundId + 'Img');
    imageId.classList.add('animated');
    
    setTimeout(()=> {
        imageId.classList.remove('animated');
    }, 1000),
    
    sound.play();
}