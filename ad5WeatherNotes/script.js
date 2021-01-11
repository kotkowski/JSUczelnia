const lsCitiesKey = "cities";
const notesContainer = document.getElementById('main');
const newButton = document.getElementById('newNoteBtn');
document.querySelector('#newNoteBtn').addEventListener('click',onNewNote);
//List of weather notes
let weatherNotes = [];

function UpdateNotes(){
    localStorage.setItem(lsCitiesKey, JSON.stringify(weatherNotes));
    getWeather();
}
getWeather();
/*
const weatherNote = {
    city: 'Name'
    country: FeatchPromise.reponse.current.
}


*/



function getWeather(){
weatherNotes = JSON.parse(localStorage.getItem(lsCitiesKey)); 
notesContainer.innerHTML = "";
weatherNotes.forEach( city=>{
    console.log(city);
    const fetchPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8721a1af0641554f3824e3e8f483176b&units=metric&lang=pl`);
    fetchPromise.then(response => {
        return response.json();
    }).then(current => {
        notesContainer.innerHTML += `
    <section class="note"><h1> 
        <h1>${current.name}</h1>
        <p>${current.weather[0].main}</p>
        <time>${current.main.temp}</time>
        <button>remove</button>
        </section>`;
        
        console.log(current);
    })

}
)
}

function onNewNote(){
    const newCity = document.querySelector("#newCity").value;
    weatherNotes.push(newCity);
    UpdateNotes();
}

