
const apiKey = "0d97d9525d0e4ee48d14211caf886e32";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&q=";
const searchInput = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` + "&units=metric");
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        var data = await response.json();
        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerText = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerText = data.main.humidity + "%";
        document.querySelector(".wind").innerText = data.wind.speed + "km/h";
        switch (data.weather[0].main) {
            case "Clear":
                weatherIcon.src = "Images/clear.png";
                break;
            case "Clouds":
                weatherIcon.src = "Images/clouds.png";
                break;
            case "Rain":
                weatherIcon.src = "Images/rain.png";
                break;
            case "Snow":
                weatherIcon.src = "Images/snow.png";
                break;
            case "Drizzle":
                weatherIcon.src = "Images/drizzle.png";
                break;
            case "Mist":
                weatherIcon.src = "Images/mist.png";
                break;
        }
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }
}
searchButton.addEventListener("click", () => {
    const city = searchInput.value;
    checkWeather(city);
});







