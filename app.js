const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const apiKey = "9b3989a3fab86d568d51811ea71752c9";

const Cname = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const search = document.querySelector(".search input");
const btn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json()
        Cname.innerHTML = data.name;
        temp.innerHTML = Math.round(data.main.temp) + "°c";
        humidity.innerHTML = data.main.humidity + "%";
        wind.innerHTML = data.wind.speed + " Km/h";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "Assets/clouds.png"
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "Assets/clear.png"
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "Assets/drizzle.png"
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "Assets/mist.png"
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "Assets/rain.png"
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "Assets/snow.png"
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }

    search.blur();


}

btn.addEventListener("click", () => {
    checkWeather(search.value);
})

search.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            checkWeather(search.value);
        }
    });
