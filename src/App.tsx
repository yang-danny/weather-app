import { useState } from 'react';
import './App.css';
import { fetchWeather } from './API/fetchWeather';
import WeatherCard from './components/WeatherCard';
import logo from './assets/logo.png'; 
function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false); // State for loading

  const handleFetchWeather = async () => {
    try {
      setError(null); // Clear previous errors
      setLoading(true); // Set loading to true
      const data = await fetchWeather(cityName);
      setWeatherData(data.daily); // Extract daily weather data
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred.');
      }
    } finally {
      setLoading(false); // Set loading to false after fetch completes
    }
  };

  return (
    <div className="App">
      <img src={logo} alt="Weather App Logo" className="logo" />
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <button onClick={handleFetchWeather}>Search</button>

      {loading && <p style={{ color: 'black' }}>Loading...</p>} {/* Display loading message */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {weatherData && (
        <div>
          <h2>7 Days Weather Forecast for {cityName}</h2>
          <div className="weather-cards-container">
            {weatherData.time.map((date: string, index: number) => (
              <WeatherCard
                key={index}
                date={date}
                weathercode={weatherData.weathercode[index]}
                sunrise={weatherData.sunrise[index]}
                sunset={weatherData.sunset[index]}
                uv={weatherData.uv_index_max[index]}
                windspeed={weatherData.windspeed_10m_max[index]}
                tempMax={weatherData.temperature_2m_max[index]}
                tempMin={weatherData.temperature_2m_min[index]}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;