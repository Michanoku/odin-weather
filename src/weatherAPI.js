const APIHandler = (function() {

  const API_KEY = 'LDP7WJSY4PZF6W34YDDQ2J9D7';
  
  let tempUnit = 'celsius';
  // Do API stuff

  async function getWeatherData(location) {
    try {
      const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`);
      const rawWeatherData = await response.json();
      const weatherData = handleWeatherData(rawWeatherData);
      return weatherData;
    } catch(err) {
      console.log(err);
    }
  }

  function handleWeatherData(rawWeatherData) {
    console.log(rawWeatherData);
    const weatherData = {
      currentIcon: rawWeatherData.currentConditions.icon,
      conditions: { 
        resolvedAddress: rawWeatherData.resolvedAddress,
        temp: adjustTemp(rawWeatherData.currentConditions.temp),
        feelslike: adjustTemp(rawWeatherData.currentConditions.feelslike),
        conditions: rawWeatherData.currentConditions.conditions,
      },
    }
    console.log(weatherData)
    return weatherData;
  }

  function adjustTemp(temp) {
    if (tempUnit === 'celsius') {
      const celsiusTemp = ((parseFloat(temp) - 32) * 5 / 9).toFixed(1);
      return `${celsiusTemp}°C`;
    } else {
      return `${temp}°F`;
    }
  }

  function setTempUnit(unit) {
    tempUnit = unit;
  }

  return { getWeatherData, setTempUnit }
})();

export { APIHandler }