const { loadEnvFile } = require('node:process');
loadEnvFile(); 

const city = process.argv[2] || 'London';
const apiKey = process.env.OPENWEATHER_API_KEY;

async function getWeatherData(cityName, api_key) {
  const safe_cityname = encodeURIComponent(cityName);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${safe_cityname}&units=metric&appid=${api_key}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Weather API request failed: ${response.status} ${response.statusText}`);
  }

  return response.json();
}

console.log(`Weather app starter for: ${city}`);

if (!apiKey) {
  console.log('Set OPENWEATHER_API_KEY before adding live API requests.');
  process.exit(0);
}

getWeatherData(city, apiKey)
  .then((data) => {
    console.log('Weather data received:');
    console.log(data);
  })
  .catch((error) => {
    console.error('Failed to fetch weather data:', error.message);
  });
