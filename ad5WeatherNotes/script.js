const lsCitiesKey = 'cities';
const notesContainer = document.getElementById('main');
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
function removeNote(ID){
    weatherNotes.splice(ID,1);
    localStorage.setItem(lsCitiesKey, JSON.stringify(weatherNotes));
    getWeather();
}


function getWeather(){
    weatherNotes = JSON.parse(localStorage.getItem(lsCitiesKey)); 
    notesContainer.innerHTML = '';
    weatherNotes.forEach( city=>{
        console.log(city);
        const fetchPromise = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8721a1af0641554f3824e3e8f483176b&units=metric&lang=pl`);
        fetchPromise.then(response => {
            return response.json();
        }).then(current => {
            const noteID = weatherNotes.indexOf(city);
            const htmlNote = document.createElement('section'); 
            const htmlTitle = document.createElement('h1'); 
            const htmlContent = document.createElement('p'); 
            const htmlForecast = document.createElement('table'); 
            const htmlButton = document.createElement('button'); 
            let iconUrl = `http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`;
            let htmlIcon =  new Image();
            htmlIcon.src = iconUrl;
            htmlIcon.classList.add('icon');
            htmlNote.classList.add('note');
            htmlTitle.innerHTML = current.name;
            htmlContent.innerHTML = current.weather[0].main + '<br> Zachmurzenie: '+ current.clouds.all +'%<br> Temperatura: ' + current.main.temp + '<br> Wilgotność:' + current.main.humidity + '<br> Wiatr: ' + current.wind.speed + 'm/s <br>';
            htmlButton.innerHTML = 'remove';
            htmlNote.appendChild(htmlTitle);
            htmlTitle.appendChild(htmlIcon);
            htmlNote.appendChild(htmlContent);
            htmlNote.appendChild(htmlForecast);
            htmlNote.appendChild(htmlButton);
            
            
            notesContainer.appendChild(htmlNote);
            const fetchPromise = fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=8721a1af0641554f3824e3e8f483176b&units=metric&lang=pl`);
        
            fetchPromise.then(response => {
                return response.json();
            }).then(newCurrent => {
                for(let i = 0; i < 6; i++){
                    let htmlRowOfForecast = document.createElement('tr');
                    let htmlTimeOfForecast = document.createElement('td');
                    let htmlFutureWeather = document.createElement('td');
                    htmlTimeOfForecast.innerHTML = newCurrent.list[i].dt_txt;
                    htmlFutureWeather.innerHTML = newCurrent.list[i].weather[0].description + ', Temperatura: ' + newCurrent.list[i].main.temp + ', Wilgotność: ' + newCurrent.list[i].main.humidity;

                    htmlRowOfForecast.appendChild(htmlTimeOfForecast);
                    htmlRowOfForecast.appendChild(htmlFutureWeather);
                    htmlForecast.appendChild(htmlRowOfForecast);
                }
                console.log(newCurrent);


            });

            htmlButton.addEventListener('click', ()=>{removeNote(noteID);});
     
        });

    }
    );
}

function onNewNote(){
    const newCity = document.querySelector('#newCity').value;
    weatherNotes.push(newCity);
    UpdateNotes();
}

setInterval(function() {
    getWeather();
}, 20000); 