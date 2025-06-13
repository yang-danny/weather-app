const OPEN_WEATHER_MAP_API_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const OPEN_METEO_API_URL = 'https://api.open-meteo.com/v1/forecast';

/**
 * Fetch latitude and longitude for a given city name using OpenStreetMap API.
 * @param cityName - The name of the city.
 * @returns {Promise<{lat: number, lon: number}>} - Latitude and longitude of the city.
 */
async function getCoordinates(cityName: string): Promise<{ lat: number; lon: number }> {
    try {
      const response = await fetch(`${OPEN_WEATHER_MAP_API_URL}?name=${encodeURIComponent(cityName)}&count=1`);
      if (!response.ok) {
        throw new Error(`Failed to fetch coordinates for city: ${cityName}`);
      }
  
      const data = await response.json();
      if (!data || !data.results || data.results.length === 0) {
        throw new Error(`No coordinates found for city: ${cityName}`);
      }
  
      const { latitude: lat, longitude: lon } = data.results[0];
      return { lat, lon };
    } catch (error) {
      if (error instanceof Error) {
        throw new Error(`Failed to fetch coordinates for city: ${cityName}. Error: ${error.message}`);
      } else {
        throw new Error(`Failed to fetch coordinates for city: ${cityName}. Unknown error occurred.`);
      }
    }
  }

/**
 * Fetch 7 days weather data using Open Meteo API.
 * @param lat - Latitude of the location.
 * @param lon - Longitude of the location.
 * @returns {Promise<any>} - Weather data for 7 days.
 */
async function getWeatherData(lat: number, lon: number): Promise<any> {
  try {
    const response = await fetch(
      `${OPEN_METEO_API_URL}?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,windspeed_10m_max,windgusts_10m_max,winddirection_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch weather data.`);
    }
    
    const data = await response.json();
    console.log(data);
    
    return data;
  } catch (error) {
    if (error instanceof Error){
        throw new Error(`Failed to fetch weather data. Error: ${error.message}`);
    } else {
    throw new Error(`Failed to fetch weather data. Error: Unknown error occurred.`);
    }
  }
}

/**
 * Main function to fetch 7 days weather data for a given city.
 * @param cityName - The name of the city.
 * @returns {Promise<any>} - Weather data for 7 days.
 */
export async function fetchWeather(cityName: string): Promise<any> {
  try {
    const { lat, lon } = await getCoordinates(cityName);
    const weatherData = await getWeatherData(lat, lon);
    return weatherData;
  } catch (error) {
    if (error instanceof Error)
    throw new Error(`Failed to fetch weather for city: ${cityName}. Error: ${error.message}`);
else
throw new Error(`Failed to fetch weather for city: Error: Unknown error occurred.`);
  }
}
