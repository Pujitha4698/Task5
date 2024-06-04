import React, { useState } from 'react';
import './App.css';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');

    const fetchWeatherData = async (location) => {
        // Mock weather data for Guntur
        const mockData = {
            city: 'Guntur',
            temperature: '35°C🌥️',
            precipitation: '10%',
            humidity: '56%',
            wind: '6 km/h',
            weather: 'Partly Cloudy',
            time: 'Tuesday, 8:00pm'
        };
        setWeatherData(mockData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeatherData(location);
    };

    return (
        <div className="weather-app">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field"
                />
                <button type="submit" className="weather-button">Get Weather</button>
            </form>
            {weatherData && (
                <div className="weather-info">
                    <h2>{weatherData.city}</h2>
                    <p>{weatherData.temperature}</p>
                    <p>Precipitation: {weatherData.precipitation}</p>
                    <p>Humidity: {weatherData.humidity}</p>
                    <p>Wind: {weatherData.wind}</p>
                    <p>Weather: {weatherData.weather}</p>
                    <p>{weatherData.time}</p>
                </div>
            )}
        </div>
    );
};

export default WeatherApp;
