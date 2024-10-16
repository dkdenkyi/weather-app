
var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;

let weatherJson = [];

document.getElementById("search").addEventListener("click", () => {

        let city = document.getElementById("searchCity").value;
        let domain = "http://api.openweathermap.org/data/2.5/weather";
       
        fetch(`${domain}?q=${city}&APPID=${mykey}`)
            .then(response=> response.json())
            .then(json => {
            weatherJson = json
            console.log(weatherJson);

            const temperature = weatherJson.main.temp;
            const wind = weatherJson.wind.speed;
            const humidity = weatherJson.main.humidity;

            document.getElementById("temp").textContent = (parseFloat(temperature)-273.15).toFixed(0) + " °C";
            document.getElementById("wind").textContent = wind + " m/s";
            document.getElementById("humidity").textContent = humidity+ "%";
            })
        }
    )
