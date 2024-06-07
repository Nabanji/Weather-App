let cityName = document.getElementById("city-name");
const submitBtn = document.getElementById("submit-btn");

const apiKey = "6a645c553fb6093acf2163b101c73078";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    let data = await response.json();

    console.log(data);
    // console.log(cityName.value);
    // e.preventDefault();
    // cityName.value = "";
}

checkWeather();

// submitBtn.addEventListener("click", displayCity);