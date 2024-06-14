let cityName = document.getElementById("city-name");
const submitBtn = document.getElementById("submit-btn");

const apiKey = "6a645c553fb6093acf2163b101c73078";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    let data = await response.json();


    let value = document.getElementById("value");
    value.textContent = data.name;

    let temperature = document.getElementById("temperature");
    let tempValue = Math.round(data.main.temp);
    temperature.textContent = tempValue + "°C";

    let humidity = document.getElementById("humidity");
    humidity.textContent = data.main.humidity + "%";

    let windSpeed = document.getElementById("wind-speed");
    let windSpeedValue = data.wind.speed;
    windSpeed.textContent = windSpeedValue + "km/h";

    console.log(data);
}

submitBtn.addEventListener("click", () => {
    checkWeather(cityName.value);
})

// checkWeather();