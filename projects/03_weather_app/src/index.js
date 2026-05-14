const city = process.argv[2] || 'London';
const apiKey = process.env.OPENWEATHER_API_KEY;

console.log(`Weather app starter for: ${city}`);

if (!apiKey) {
  console.log('Set OPENWEATHER_API_KEY before adding live API requests.');
  process.exit(0);
}

console.log('Next step: call the weather API with fetch and print the response.');
