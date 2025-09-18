const APIHandler = (function() {

  const API_KEY = 'LDP7WJSY4PZF6W34YDDQ2J9D7';
  // Do API stuff

  async function getWeatherData(location) {
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
      const rawWeatherData = await response.json();
      return rawWeatherData;
    } catch(err) {
      console.log(err);
    }
  }

  return { getWeatherData }
})();

export { APIHandler }