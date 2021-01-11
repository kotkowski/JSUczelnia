const lsNotesKey = 'notes';
renderNotes();
/// 1. how to store & save notes in local storage
const notes = [];


//json
const note = {
    title: 'new note',
    content: 'simple note',
    colour: '#ff1455',
    pinned: false,
    createDate: new Date()
};

notes.push(note);
notes.push(note);
notes.push(note);

localStorage.setItem(lsNotesKey, JSON.stringify(notes));



//2. read the nots from local storage

const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsNotesKey));

const convertedNotes = notesFromLocalStorage.map(note => {
    note.createDate = new Date(note.createDate);
    return note;
});
//3. html structure modify
const notesContainer = document.querySelector('main');
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
function renderNotes(){
    const notesFromLocalStorage = JSON.parse(localStorage.getItem(lsNotesKey));
    const notesContainer = document.querySelector('main');
    const convertedNotes = notesFromLocalStorage.map(note => {
        note.createDate = new Date(note.createDate);
        return note;
    });
    document.querySelector('main').innerHTML = '';
    for(const note of convertedNotes){
        const htmlNote = document.createElement('section'); 
        const htmlTitle = document.createElement('h1'); 
        const htmlContent = document.createElement('p'); 
        const htmlTime = document.createElement('time'); 
        const htmlButton = document.createElement('button'); 

        htmlNote.classList.add('note');
        htmlTitle.innerHTML = note.title;
        htmlContent.innerHTML = note.content;
        htmlTime.innerHTML = note.createDate.toLocaleString();
        htmlButton.innerHTML = 'remove';

        htmlButton.addEventListener('click', removeNote);
        htmlNote.appendChild(htmlTitle);
        htmlNote.appendChild(htmlContent);
        htmlNote.appendChild(htmlTime);
        htmlNote.appendChild(htmlButton);

        notesContainer.appendChild(htmlNote);
    
    }
}

function removeNote(){
    
}


//4. get value from html forms

document.querySelector('#newNoteBtn').addEventListener('click', onNewNote);

function onNewNote(){
    const newNoteTitle = document.querySelector('#noteTitle').value;
    const newNoteContent = document.querySelector('#noteContent').value;
    const newNoteDate = document.querySelector('#noteDate').value;
    const newNoteColor = document.querySelector('#noteColor').value;

    const note = {
        title: newNoteTitle,
        content: newNoteContent,
        colour: newNoteColor,
        pinned: false,
        createDate: new Date(newNoteDate)
    };
    notes.push(note);
    localStorage.setItem(lsNotesKey, JSON.stringify(notes));
    renderNotes();
}

