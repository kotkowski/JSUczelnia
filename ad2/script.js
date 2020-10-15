document.body.addEventListener('keydown', onKeyPress);
document.querySelector('#recordBtn').addEventListener('click', onRecordBtn);
document.querySelector('#playBtn').addEventListener('click', onPlayBtn);

let recordStartTime;
let recordedSound = [];
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
        const soundTime = Date.now() - recordStartTime;
        const sound = document.querySelector('#'+ soundId);
        const soundObj = {
            soundId: soundId,
            time: soundTime
        };
        sound.play();
        recordedSound.push(soundObj);
    }
    
}

function onRecordBtn(){
    recordStartTime = Date.now();
}

function onPlayBtn(){
    for(let index=0; index < recordedSound.length; index++){
        const soundObj = recordedSound[index];
        
        
        setTimeout(()=> {
            playSound(soundObj.soundId);
        }, soundObj.time
            
        );
        
    }
}

function playSound(soundId){
    const sound = document.querySelector('#' + soundId);
    sound.play();
}