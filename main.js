function getWeather() {
    const cityName = document.getElementById('cityInput').value;
    if (cityName === '') {
        alert('Please enter a city name');
        return;
    }

    const apiKey = '96b947a45d33d7dc1c49af3203966408'; // Bu yerda siz o'z API kalitingizni kiriting
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            document.getElementById('cityName').innerText = data.name;
            document.getElementById('description').innerText = data.weather[0].description;
            document.getElementById('temperature').innerText = `Temperature: ${data.main.temp}°C`;
            document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
            document.getElementById('weatherData').style.display = 'block';
        })
        .catch(() => {
            alert('City not found!');
        });
}
