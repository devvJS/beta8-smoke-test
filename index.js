// Dad joke CLI
const axios = require('axios');

async function getJoke() {
  const response = await axios.get('https://icanhazdadjoke.com/', {
    headers: { Accept: 'application/json' },
    timeout: 5000,
  });
  return response.data.joke;
}

(async () => {
  try {
    const joke = await getJoke();
    console.log(joke);
    process.exit(0);
  } catch (err) {
    console.error("Couldn't fetch a dad joke right now. Check your internet connection and try again.");
    process.exit(1);
  }
})();
