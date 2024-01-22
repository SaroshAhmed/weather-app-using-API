const apiKey = '76279c5ccfbf25c342c725aee60b1189';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?&units=metric&q='
const searhBar = document.querySelector('.search input');
const searhButton = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weatherIcon');
let checkWeather = async (city)=>{
    const response  = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(response.status==404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    else{
        let data = await response.json();
        console.log(data)
        document.querySelector('.city').innerHTML =data.name;
        document.querySelector('.temp').innerHTML =Math.round(data.main.temp)+'°c';
        document.querySelector('.humidity').innerHTML =data.main.humidity+'%';
        document.querySelector('.wind').innerHTML =data.wind.speed+'km/hr';
        switch(data.weather[0].main){
            case 'Clouds':
            weatherIcon.src='clouds.png';
            break;
            case 'Clear':
            weatherIcon.src='sun (1).png';
            break;
            case 'Rain':
            weatherIcon.src='rainy.png';
            break;
            case 'Drizzle':
            weatherIcon.src='drizzle.png';
            break;
            case 'Mist':
            weatherIcon.src='misty.png';
            break;
            case 'Snow':
            weatherIcon.src='snow.png';
            break;
        }
        document.querySelector('.weather').style.display='block';
        document.querySelector('.error').style.display='none';
    }
    document.getElementById('tag').addEventListener('click',()=>{
        const gitLink= 'https://github.com/SaroshAhmed'
        window.open(gitLink, "_blank");
    });
}
searhButton.addEventListener('click',()=>{
    checkWeather(searhBar.value); 
})