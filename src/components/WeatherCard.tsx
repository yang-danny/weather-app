
interface WeatherCardProps {
  date: string;
  weathercode: number;
  sunrise: string;
  sunset: string;
  uv: number;
  windspeed: number;
  tempMax: number;
  tempMin: number;
  
}
const weatherCodeDescriptions: { [key: number]: string } = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Drizzle: Light intensity',
    53: 'Drizzle: Moderate intensity',
    55: 'Drizzle: Dense intensity',
    56: 'Freezing Drizzle: Light intensity',
    57: 'Freezing Drizzle: Dense intensity',
    61: 'Rain: Slight intensity',
    63: 'Rain: Moderate intensity',
    65: 'Rain: Heavy intensity',
    66: 'Freezing Rain: Light intensity',
    67: 'Freezing Rain: Heavy intensity',
    71: 'Snow fall: Slight intensity',
    73: 'Snow fall: Moderate intensity',
    75: 'Snow fall: Heavy intensity',
    77: 'Snow grains',
    80: 'Rain showers: Slight intensity',
    81: 'Rain showers: Moderate intensity',
    82: 'Rain showers: Violent intensity',
    85: 'Snow showers: Slight intensity',
    86: 'Snow showers: Heavy intensity',
    95: 'Thunderstorm: Slight or moderate',
    96: 'Thunderstorm with slight hail',
    99: 'Thunderstorm with heavy hail',
  };
  

const WeatherCard: React.FC<WeatherCardProps> = ({
    date,
    weathercode,
    sunrise,
    sunset,
    uv,
    windspeed,
    tempMax,
    tempMin,
  }) => {
    // Convert UTC time to Sydney local time
    const convertToSydneyTime = (utcTime: string): string => {
      const date = new Date(utcTime);
      return new Intl.DateTimeFormat('en-AU', {
        timeZone: 'Australia/Sydney',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      }).format(date);
    };
     // Get weather description based on weather code
  const weatherDescription = weatherCodeDescriptions[weathercode] || 'Unknown weather condition';

  return (
    <div className="weather-card">
      <h3>{date}</h3>
      <p>Weather: {weatherDescription}</p>
        <p>Sunrise: {convertToSydneyTime(sunrise)}</p>
      <p>Sunset: {convertToSydneyTime(sunset)}</p>
        <p>UV: {uv}</p>
        <p>Wind Speed: {windspeed} m/s</p>
      <p>Max Temperature: {tempMax}°C</p>
      <p>Min Temperature: {tempMin}°C</p>
    </div>
  );
};

export default WeatherCard;