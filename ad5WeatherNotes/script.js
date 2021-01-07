const lsCitiesKey = "cities";
const notesContainer = document.getElementById('main');
//List of weather notes
let weatherNotes = [];

/*const weatherNote = {
    city: 'Name'
    country: FeatchPromise.reponse.current.
}


*/

localStorage.setItem(lsCitiesKey, JSON.stringify(['Warsaw','Krakow']));
getWeather();

function getWeather(){

weatherNotes = JSON.parse(localStorage.getItem(lsCitiesKey)); 

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


