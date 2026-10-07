function getWeather() {

    const city =
        document.getElementById("cityInput").value;

    if(city === "") {
        alert("Please enter a city name");
        return;
    }

    document.getElementById("cityName").innerHTML = city;
    document.getElementById("temperature").innerHTML = "30°C";
    document.getElementById("condition").innerHTML = "Sunny";
    document.getElementById("humidity").innerHTML = "70%";
    document.getElementById("wind").innerHTML = "12 km/h";
}