const lsNotesKey = 'notes';
/// 1. how to store & save notes in local storage

//json
const note = {
    title: 'new note',
    content: 'simple note',
    colour: '#ff1455',
    pinned: false,
    createDate: new Date()
};

//localStorage.setItem(lsNotesKey, JSON.stringify(notes));

let convertedNotes =[];

//2. read the nots from local storage

const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsNotesKey));
if(notesFromLocalStorage != null){
    
convertedNotes = notesFromLocalStorage.map(note => {
    note.createDate = new Date(note.createDate);
    return note;
});
}

renderNotes();
//3. html structure modify
const notesContainer = document.querySelector('#section');
/*
for(const note of convertedNotes){
    notesContainer.innerHTML += `
    <section class="note"><h1> 
        <h1>${note.title}</h1>
        <p>${note.content}</p>
        <time>${note.createDate.toLocaleString()}</time>
        <button>remove</button>
        </section>`;
}
*/
//full object way
function removeNote(ID){
    convertedNotes.splice(ID,1);
    localStorage.setItem(lsNotesKey, JSON.stringify(convertedNotes));
    renderNotes();
}


function renderNotes(){
    const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsNotesKey));
    const notesContainer = document.querySelector('#section');
    const pinnedContainer = document.querySelector('#pinnedSection');
    const convertedNotes = notesFromLocalStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    });
    document.querySelector('#section').innerHTML = '';
    document.querySelector('#pinnedSection').innerHTML = '';
    for(const note of convertedNotes){
        const pinned = note.pinned;
        const noteID = convertedNotes.indexOf(note);
        const htmlNote = document.createElement('section'); 
        const htmlTitle = document.createElement('h1'); 
        const htmlContent = document.createElement('p'); 
        const htmlTime = document.createElement('time'); 
        const htmlButton = document.createElement('button'); 

        htmlNote.classList.add('note');
        htmlNote.classList.add(note.colour);
        if(pinned){
            htmlTitle.innerHTML = note.title + '📍';
        } else {
            htmlTitle.innerHTML = note.title;
        }
        
        htmlContent.innerHTML = note.content;
        htmlTime.innerHTML = note.createDate.toLocaleString() + '<br><br>';
        htmlButton.innerHTML = 'remove';

        htmlNote.appendChild(htmlTitle);
        htmlNote.appendChild(htmlContent);
        htmlNote.appendChild(htmlTime);
        htmlNote.appendChild(htmlButton);

        //htmlButton.setAttribute('onclick',`removeNote(${noteID})`);
        htmlButton.addEventListener('click', ()=>{removeNote(noteID)});
        console.log(pinned);
        if(pinned){
            pinnedContainer.appendChild(htmlNote);
        } else {
            notesContainer.appendChild(htmlNote);
        }
        
    
    }
}



//4. get value from html forms

document.querySelector('#newNoteBtn').addEventListener('click', onNewNote);

function onNewNote(){
    const newNoteTitle = document.querySelector('#noteTitle').value;
    const newNoteContent = document.querySelector('#noteContent').value;
    //const newNoteDate = document.querySelector('#noteDate').value;
    const newNoteColor = document.querySelector('#noteColor').value;
    const newNotePinned = document.querySelector('#notePinned').checked;

    const note = {
        title: newNoteTitle,
        content: newNoteContent,
        colour: newNoteColor,
        pinned: newNotePinned,
        createDate: new Date()
    };
    convertedNotes.push(note);
    localStorage.setItem(lsNotesKey, JSON.stringify(convertedNotes));
    renderNotes();
}

