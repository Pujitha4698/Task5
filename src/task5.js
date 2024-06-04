function fetchWeather() {
    const city = document.getElementById('city').value;
    let url;

    if (city) {
        url = `https://wttr.in/${city}?format=%l:+%c+%t`;
        getWeatherData(url);
    } else if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            url = `https://wttr.in/${latitude},${longitude}?format=%l:+%c+%t`;
            getWeatherData(url);
        });
    }
}

function getWeatherData(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const [location, weather, temperature] = data.split('+');
            document.getElementById('location').textContent = `Location: ${location}`;
            document.getElementById('weather').textContent = `Weather: ${weather}`;
            document.getElementById('temperature').textContent = `Temperature: ${temperature}`;
        })
        .catch(error => {
            console.error('Error fetching the weather data:', error);
        });
}

// Fetch weather on page load if location is available
window.onload = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            const url = `https://wttr.in/${latitude},${longitude}?format=%l:+%c+%t`;
            getWeatherData(url);
        });
    }
};
