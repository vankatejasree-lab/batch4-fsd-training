const apiKey = "193c38c2165feb9e53d3f6a2ee36ae39";

document.getElementById("searchButton").addEventListener("click", () => {

    const city = document.getElementById("cityInput").value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => response.json())
        .then(data => {

            if (data.cod !== 200) {
                alert("City not found");
                return;
            }

            document.getElementById("cityName").innerText = data.name;
            document.getElementById("forecastLocation").innerText = data.name;

            document.getElementById("temperature").innerText =
                Math.round(data.main.temp);

            document.getElementById("weatherCondition").innerText =
                data.weather[0].description;

            document.getElementById("feelsLike").innerText =
                Math.round(data.main.feels_like) + " °C";

            document.getElementById("humidity").innerText =
                data.main.humidity + " %";

            document.getElementById("windSpeed").innerText =
                data.wind.speed + " km/h";

            document.getElementById("morningTemp").innerText =
                Math.round(data.main.temp - 2) + "°C";

            document.getElementById("afternoonTemp").innerText =
                Math.round(data.main.temp + 2) + "°C";

            document.getElementById("eveningTemp").innerText =
                Math.round(data.main.temp) + "°C";

            document.getElementById("nightTemp").innerText =
                Math.round(data.main.temp - 3) + "°C";

            document.getElementById("travelTitle").innerText =
                "Travel Recommendation";

            if (data.main.temp > 30) {
                document.getElementById("travelSuggestion").innerText =
                    "Hot weather. Carry water, sunscreen, and light clothing.";
            } else if (data.main.temp > 20) {
                document.getElementById("travelSuggestion").innerText =
                    "Pleasant weather. Great for sightseeing and outdoor activities.";
            } else {
                document.getElementById("travelSuggestion").innerText =
                    "Cool weather. Carry a jacket and enjoy your trip.";
            }
        })
        .catch(error => {
            console.error(error);
            alert("Error fetching weather data");
        });

});