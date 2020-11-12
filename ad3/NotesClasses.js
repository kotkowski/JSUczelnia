//note
//note.js

class Note{
    constructor(title, content, color, pinned){
        this.title = title;
        this.content = content;
        this.color = color;
        this.pinned = pinned;
        this.createDate = new Date();
        this.id = Date.now();
    }
}

//notes.js
class Notes{
    constructor(constainerSelector){
        this.notesArr = [];
        this.db = new Db();
        this.notesUI = new NotesUI(containerSelector);
    }

    addNote(note){
        this.notesArr.push(note);

        this.db.saveNotes(this.notesArr);
        this.notesUI.addNote(note);
        
    }

    removeNote(id){
    this.notesArr = this.notesArr.filter(e1=>e1.id !== id);

    }

    getNotes() {
        return this.notesArr;
    }
}

class Db{
    constructor(){
        this.lsNotesKey = "notes";
    }

    saveNotes(notes){
        localStorage.setItem(this.lsNotesKey,JSON.stringify(notes));
    }
    getNotes(){
        return JSON.parse(localStorage.getItem(this.lsNotesKey));
    }
}


//notes-ui.js
class NotesUI{
    constructor(containerSelector = 'section'){
        this.notesContainer = document.querySelector(containerSelector);
    }
    addNote(note){
        const htmlNote = this.createNote(note);
        const container = this.getNotesContainer();
        container.appendChild(htmlNote);
    }

    createNote(note){
        const htmlNote = document.createElement('div');
        htmlNote.classList.add('note');
        //do all things with notehtml object - create  title, content etc

        return htmlNote;
    }
    removeNote(id){
        const note = this.getNote(id);
        const container = this.getNotesContainer();
        container.removeChild(note);
    }

    getNote(id){
        const htmlNote = document.querySelector('#' + id);
    }
    getNotesContainer(){
        return this.notesContainer;
    }
}


class UI{
    getElement(selector){
        return document.querySelector(selector);
    }
    listen(element,event,callback){
        return element.addEventListener(event,callback);
    }
    onNewNote(){

    }
    
}

//main.js

const notesObj = new Notes();
document.querySelector('#addNewNote').addEventListener('click',onNewNote);
const el = ui.getElement('#addNewNote');
ui.listen(el, 'click', onNewNote)
//notes collection

//storage

//ui operations