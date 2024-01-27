// link for weather API : https://api.openweathermap.org/data/2.5/weather?q=germany&appid=44fb1deff17c3f40b66e10bf83f0ee01&units=metric
// key for weather API : 44fb1deff17c3f40b66e10bf83f0ee01 

const apiLink = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const apiKey = "44fb1deff17c3f40b66e10bf83f0ee01";

async function check_weather(url) {

    try {

        const response = await fetch(url);
        const data = await response.json();
        console.log(data); 
        return data;

    }
    catch (error) {
        console.log(error);
        return null;
    }
}

async function displayWeather(url) {

    const data = await check_weather(url);

    if (data) {
        var city = document.querySelector(".city");
        var temp = document.querySelector(".temp");
        var hum = document.querySelector(".humidity");
        var wind = document.querySelector(".wind");
        var climateImg = document.querySelector(".weather-icon")

        city.innerHTML = data.name;
        temp.innerHTML = data.main.temp+`°c`
        hum.innerHTML = data.main.humidity+`%`
        wind.innerHTML = data.wind.speed+` Km\/h`

        var cityClimate = data.weather[0].main.toLowerCase()
        console.log(cityClimate)
        
        switch(cityClimate){

            case "clouds" :
                climateImg.src = "images/clouds.png"
                break

            case "clear" :
                climateImg.src = "images/clear.png"
                break

            case "drizzle" :
                climateImg.src = "images/drizzle.png"
                break  

            case "mist" :
                climateImg.src = "images/mist.png"
                break  

            case "rain" :
                climateImg.src = "images/rain.png"
                break    

            case "snow" :
                climateImg.src = "images/snow.png"
                break    

            case "fog" :
                climateImg.src = "images/mist.png"
                break     

            case "haze" :
                climateImg.src = "images/haze.png"
                break        

            default:    
                break
        }

        var weather = document.querySelector(".weather")
        var land = document.querySelector(".land")
        weather.style.display = "block"
        land.style.display = "none"

        
    } else {
        console.log("Failed to fetch weather data");
    }
}

var search = document.getElementById("searchBtn")
var cityName = "bengaluru"

search.addEventListener("click",()=>{

    var location = document.getElementById("loc").value
    console.log(location)
    cityName = location

    var url = `${apiLink}&q=${cityName}&appId=${apiKey}`
    displayWeather(url);

})

