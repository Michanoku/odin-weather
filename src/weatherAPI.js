const APIHandler = (function () {
  const API_KEY = "LDP7WJSY4PZF6W34YDDQ2J9D7";

  let tempUnit = "celsius";
  // Do API stuff

  async function getWeatherData(location) {
    try {
      const response = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${API_KEY}`
      );
      const rawWeatherData = await response.json();
      const weatherData = handleWeatherData(rawWeatherData);
      return weatherData;
    } catch (err) {
      console.log(err);
    }
  }

  function handleWeatherData(rawWeatherData) {
    const times = getLocalSunTimes(rawWeatherData.tzoffset, rawWeatherData.currentConditions.sunriseEpoch, rawWeatherData.currentConditions.sunsetEpoch)
    const weatherData = {
      currentIcon: rawWeatherData.currentConditions.icon,
      progress: times.progress,
      conditions: {
        resolvedAddress: rawWeatherData.resolvedAddress,
        time: times.time,
        sunrise: times.sunrise,
        sunset: times.sunset,
        difference: times.difference,
        temp: adjustTemp(rawWeatherData.currentConditions.temp),
        feelslike: `Feels like ${adjustTemp(rawWeatherData.currentConditions.feelslike)}`,
        conditions: rawWeatherData.currentConditions.conditions,
        precipitation: announcePrecipitation(
          rawWeatherData.currentConditions.preciptype,
          rawWeatherData.currentConditions.precipprob,
        ),
        humidity: rawWeatherData.currentConditions.humidity,
        wind: announceWind(
          rawWeatherData.currentConditions.windspeed,
          rawWeatherData.currentConditions.winddir
        ),
        uvindex: uvIndex(rawWeatherData.currentConditions.uvindex),
      },
      days: getDays(rawWeatherData.days),
    };
    console.log(weatherData);
    return weatherData;
  }

  function getWeekday(dateString) {
    const date = new Date(dateString);
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return weekdays[date.getDay()];
  }

  function getDays(days) {
    const forecast = new Array();
    for (let i = 1; i < 6; i++) {
      const day = {
        day: getWeekday(days[i].datetime),
        datetime: days[i].datetime,
        temp: adjustTemp(days[i].temp),
        tempmax: adjustTemp(days[i].tempmax),
        tempmin: adjustTemp(days[i].tempmin),
        conditions: days[i].conditions,
        precipitation: announcePrecipitation(
          days[i].preciptype,
          days[i].precipprob,
        ),
        icon: days[i].icon,
      }
      forecast.push(day);
    }
    return forecast;
  }

  function getLocalSunTimes(offsetHours, sunriseEpoch, sunsetEpoch) {
    // normalize inputs
    const offsetMilliseconds = Number(offsetHours) * 3600 * 1000;
    const nowMilliseconds = Date.now(); 

    const getTime = (milliseconds) => {
      const d = new Date(milliseconds);
      return { h: d.getUTCHours(), m: d.getUTCMinutes() };
    };

    const localNowMilliseconds = nowMilliseconds + offsetMilliseconds;
    const sunriseMillisecondsLocal = Number(sunriseEpoch) * 1000 + offsetMilliseconds;
    const sunsetMillisecondsLocal  = Number(sunsetEpoch)  * 1000 + offsetMilliseconds;

    const nowClock = getTime(localNowMilliseconds);
    const sunriseClock = getTime(sunriseMillisecondsLocal);
    const sunsetClock = getTime(sunsetMillisecondsLocal);

    const totalDayMilliseconds = sunsetMillisecondsLocal - sunriseMillisecondsLocal;      
    const elapsedMilliseconds  = localNowMilliseconds - sunriseMillisecondsLocal;        
    const untilSunsetMilliseconds = sunsetMillisecondsLocal - localNowMilliseconds;      

    // progress percent (clamped 0..100)
    let progress = 0;
    if (totalDayMilliseconds > 0) {
      progress = Math.round((elapsedMilliseconds / totalDayMilliseconds) * 100);
      progress = Math.max(0, Math.min(100, progress));
    }

    // convert a milliseconds duration -> hours & minutes (keeps sign info)
    const getFormattedTime = (milliseconds) => {
      const sign = milliseconds < 0 ? -1 : 1;
      const a = Math.abs(milliseconds);
      const hours = Math.floor(a / (3600 * 1000));
      const minutes = Math.floor((a % (3600 * 1000)) / (60 * 1000));
      return { sign, hours, minutes };
    };

    const until = getFormattedTime(Math.max(0, untilSunsetMilliseconds));

    const pad = (n) => String(n).padStart(2, '0');

    return {
      time: `Current time: ${pad(nowClock.h)}:${pad(nowClock.m)}`,                        
      sunrise: `${pad(sunriseClock.h)}:${pad(sunriseClock.m)}`,                
      sunset: `${pad(sunsetClock.h)}:${pad(sunsetClock.m)}`,                 
      difference: `Sunset in: ${pad(until.hours)}h ${pad(until.minutes)}m`,
      progress: progress,
    };
  }


  function announcePrecipitation(type, propability) {
    if (type === null) {
      return 'Precipitation: None';
    } else {
      const precipitationType = String(type).charAt(0).toUpperCase() + String(type).slice(1);
      return `${precipitationType}: ${propability}%`;
    }
  }

  function announceWind(speed, direction) {
    const directions = [
      "North",
      "Northeast",
      "East",
      "Southeast",
      "South",
      "Southwest",
      "West",
      "Northwest",
    ];
    const index = Math.round(direction / 45) % 8;
    return `Wind: ${speed}m/s ${directions[index]}`;
  }

  function adjustTemp(temp) {
    if (tempUnit === "celsius") {
      const celsiusTemp = (((parseFloat(temp) - 32) * 5) / 9).toFixed(1);
      return `${celsiusTemp}°C`;
    } else {
      return `${temp}°F`;
    }
  }

  function uvIndex(uv) {
    if (uv <= 2) {
      return `${uv} (Low)`;
    } else if (uv <= 5) {
      return `${uv} (Moderate)`;
    } else if (uv <= 7) {
      return `${uv} (High)`;
    } else if (uv <= 10) {
      return `${uv} (Very High)`;
    } else {
      return `${uv} (Extreme)`;
    }
  }

  function setTempUnit(unit) {
    tempUnit = unit;
  }

  return { getWeatherData, setTempUnit };
})();

export { APIHandler };
