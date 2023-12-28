
// Weather object containing methods and properties related to fetching and displaying weather data
let weather = {
    // OpenWeatherMap API key for accessing weather data
    
    apiKey: 'fd6cc706c0b799f20600744169bb318b',
   

    // Method to get weather data for a given city using the OpenWeatherMap API
    getWeather: function (city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
                city +
                "&appid=" +
                this.apiKey
        )
            .then((response) => response.json())
            .then((data) => this.displayWeather(data)); // Call displayWeather with the retrieved data
    },

    // Method to display weather information on the webpage
    displayWeather: function (data) {
        // Destructuring data to extract relevant information
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        // Convert temperature from Kelvin to Celsius
        const tempCelsius = (temp - 273.15).toFixed(2);

        // Update HTML elements with the weather information
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".weather-icon").src =
            "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector(".weather-description").innerText = description;
        document.querySelector(".temp").innerText = tempCelsius + "°C";
        document.querySelector(".humidity").innerText = "Humidity " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed " + speed + " km/h";
    },

    // Method to initiate a weather search based on the user input
    search: function () {
        const city = document.querySelector(".search-bar").value;
        console.log("Searching for city:", city);
        this.getWeather(city);
    },
};

// Event listener to execute code when the DOM content has been loaded
document.addEventListener("DOMContentLoaded", function () {
    // Event listener for the search button to trigger the weather search
    document.querySelector(".search button").addEventListener("click", function () {
        weather.search();
    });
});



