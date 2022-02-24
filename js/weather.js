

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    
    //console network fetch 사용 promise
    fetch(url) 
        .then(response => response.json())
        .then(data=>{
            const nameContainer = document.querySelector("#weather span:first-child");
            const tempContainer = document.querySelector("#weather span:nth-child(2)");
            const weatherContainer = document.querySelector("#weather span:last-child");
            const name = data.name;
            const temp = data.main.temp;
            const weather = data.weather[0].description
            nameContainer.innerText = name;
            tempContainer.innerText = temp;
            weatherContainer.innerText = weather;

        });
}

function onGeoError(){
    alert("Can\'t find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

