import { APIHandler } from './weatherAPI.js'

const weatherImages = require.context('./img/weather', false, /\.webp$/);
const weatherIcons = require.context('./img/icons', false, /\.svg$/);

const elementHandler = (function() {
  // Do DOM stuff
  const inputField = document.querySelector('#input');
  const submitButton = document.querySelector('#submit');
  const location = document.querySelector('#location');
  const currentCondition = document.querySelector('#current-condition');
  const additionalInformation = document.querySelector('#additional-information');
  const weeklyOverview = document.querySelector('#weekly-overview');
  const svgContainer = document.querySelector('#svg');

  const conditionImages = {
    'snow':	'Photo by <a href="https://unsplash.com/@victorserban?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Victor Serban</a> on <a href="https://unsplash.com/photos/snow-covered-tree-branches-during-daytime-6Xqj98qWsoo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'snow-showers-day':	'Photo by <a href="https://unsplash.com/@jack_scorner?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Thomas Griesbeck</a> on <a href="https://unsplash.com/photos/white-particles-closeup-photography-FytijU4pB_w?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'snow-showers-night':	'Photo by <a href="https://unsplash.com/@kyddvisuals?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Dillon Kydd</a> on <a href="https://unsplash.com/photos/a-black-and-white-photo-of-snow-falling-7o7m1xCEiY8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'thunder-rain':	'Photo by <a href="https://unsplash.com/@remi_anton?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Remi Clinton</a> on <a href="https://unsplash.com/photos/lightning-on-green-painted-wall-wg4R2xF2HLg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'thunder-showers-day': 'Photo by <a href="https://unsplash.com/@may_anaya?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">May Rubio</a> on <a href="https://unsplash.com/photos/a-lightning-bolt-is-seen-in-the-sky-over-a-city-hhvXZC4jML8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'thunder-showers-night': 'Photo by <a href="https://unsplash.com/@navalrathore_10?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Naval Rathore</a> on <a href="https://unsplash.com/photos/lightning-striking-a-city-v7ztdGK60Js?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'rain': 'Photo by <a href="https://unsplash.com/@r_shayesrehpour?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">reza shayestehpour</a> on <a href="https://unsplash.com/photos/grayscale-photography-of-raindrops-Nw_D8v79PM4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'showers-day': 'Photo by <a href="https://unsplash.com/@mad_maxxy?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Shutter Verse</a> on <a href="https://unsplash.com/photos/a-rain-soaked-window-with-trees-in-the-background-AuTZAjMj6Lg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',	
    'showers-night': 'Photo by <a href="https://unsplash.com/@maxvdo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Max van den Oetelaar</a> on <a href="https://unsplash.com/photos/a-window-with-rain-drops-on-it-at-night-1e60bqR1Ar0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',	
    'fog': 'Photo by <a href="https://unsplash.com/@pueblovista?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Paul Pastourmatzis</a> on <a href="https://unsplash.com/photos/silhouette-of-trees-covered-by-fog-KT3WlrL_bsg?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'wind': 'Photo by <a href="https://unsplash.com/@mahkeo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Khamkéo</a> on <a href="https://unsplash.com/photos/trees-with-wind-photo-WtwSsqwYlA0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'cloudy':	'Photo by <a href="https://unsplash.com/@mahkeo?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Khamkéo</a> on <a href="https://unsplash.com/photos/trees-with-wind-photo-WtwSsqwYlA0?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'partly-cloudy-day': 'Photo by <a href="https://unsplash.com/@abaid007?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Abaidullah bhatti</a> on <a href="https://unsplash.com/photos/a-plane-flying-through-a-cloudy-blue-sky-cNApBGj64gI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'partly-cloudy-night': 'Photo by <a href="https://unsplash.com/@mnvshr?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Manav Sharma</a> on <a href="https://unsplash.com/photos/the-moon-is-seen-through-the-dark-clouds-eZ5JnE5_GeI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',	
    'clear-day': 'Photo by <a href="https://unsplash.com/@groovelanddesigns?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Grooveland Designs</a> on <a href="https://unsplash.com/photos/blue-sky-with-white-sun-zjoydJb17mE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'clear-night': 'Photo by <a href="https://unsplash.com/@hdbernd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bernd 📷 Dittrich</a> on <a href="https://unsplash.com/photos/a-half-moon-in-a-dark-blue-sky-9Z1Ima3P3ww?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'hail': 'Photo by <a href="https://unsplash.com/@hdbernd?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Bernd 📷 Dittrich</a> on <a href="https://unsplash.com/photos/a-half-moon-in-a-dark-blue-sky-9Z1Ima3P3ww?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'rain-snow': 'Photo by <a href="https://unsplash.com/@alexblakephotography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Alex Otto</a> on <a href="https://unsplash.com/photos/silver-and-red-necklace-with-pendant-cGBqLVykbnA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'rain-snow-showers-day': 'Photo by <a href="https://unsplash.com/@s_art_media?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">S-Art Media</a> on <a href="https://unsplash.com/photos/a-wet-road-in-the-middle-of-a-forest-KdgXoYhYrcQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'rain-snow-showers-night': 'Photo by <a href="https://unsplash.com/@rlldied?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Valeria Nikitina</a> on <a href="https://unsplash.com/photos/a-street-light-with-a-lot-of-snow-on-it-MVK6qMBw6o8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'sleet': 'Photo by <a href="https://unsplash.com/@jbtzxclsv?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Jodie Walton</a> on <a href="https://unsplash.com/photos/a-street-that-has-some-snow-on-it-49YvBN9MbEM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'thunder': 'Photo by <a href="https://unsplash.com/@lc_photography?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Leon Contreras</a> on <a href="https://unsplash.com/photos/lightning-illustration-qpdfU6vehgs?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
    'idle': 'Photo by <a href="https://unsplash.com/@nasa?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">NASA</a> on <a href="https://unsplash.com/photos/hurricane-as-seen-from-space-5477L9Z5eqI?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>',
  }


  function addListeners() {
    // Add Event Listeners
    submitButton.addEventListener('click', async () => {
      const value = inputField.value;
      submitButton.classList.add("clicked");
      submitButton.addEventListener('transitionend', () => {
        submitButton.classList.remove("clicked");
      });
      if (value) {
        const data = await APIHandler.getWeatherData(value);
        console.log(FormData)
        showWeather(data);
      }
    });
  }

  function createSvg(rawData, size) {
    const adjustedSvg = rawData.replaceAll("#000", "#ffffff");
    const parser = new DOMParser();
    const svgDoc = parser.parseFromString(adjustedSvg, "image/svg+xml");
    const svg = svgDoc.documentElement;
    svg.style.height = `${size}rem`;
    svg.style.width = `${size}rem`;
    svg.style.fill = '#ffffff';
    return svg;
  }

  function showWeather(data) {
    console.log(data)
    const img = weatherImages(`./${data.currentIcon}.webp`);
    const svg = createSvg(weatherIcons(`./${data.currentIcon}.svg`), 6);
    document.body.style.background = `url(${img})`;
    while (svgContainer.firstChild) {
      svgContainer.removeChild(svgContainer.firstChild);
    }
    svgContainer.appendChild(svg);
    for (const key of Object.keys(data.conditions)) {
      document.querySelector(`#${key}`).textContent = data.conditions[key];
    }
    while (weeklyOverview.firstChild) {
      weeklyOverview.removeChild(weeklyOverview.firstChild);
    }
    data.days.forEach(day => {
      const dayData = addDay(day);
      weeklyOverview.appendChild(dayData);
    });
    location.style.display = 'grid';
    currentCondition.style.display = 'flex';
    additionalInformation.style.display ='flex';
    weeklyOverview.style.display = 'grid';
  }

  function addDay(day) {
    const container = document.createElement("div");
    container.classList.add("day")
    // --- day-date ---
    const dayDate = document.createElement("div");
    dayDate.classList.add("day-date");

    const weekdayDiv = document.createElement("div");
    weekdayDiv.classList.add("weekday");
    weekdayDiv.textContent = day.day;

    const dateDiv = document.createElement("div");
    dateDiv.classList.add("date");
    dateDiv.textContent = day.datetime;

    // Append weekday and date to day-date
    dayDate.appendChild(weekdayDiv);
    dayDate.appendChild(dateDiv);

    // --- day-svg-temp ---
    const daySvgTemp = document.createElement("div");
    daySvgTemp.classList.add("day-svg-temp");
    
    const daySvg = document.createElement("div");
    daySvg.classList.add("day-svg");
    const svg = createSvg(weatherIcons(`./${day.icon}.svg`), 3);
    daySvg.appendChild(svg);

    const temp = document.createElement("div");
    temp.textContent = day.temp;
    temp.classList.add('day-temp');

    // Append svg and temps to day-svg-temp
    daySvgTemp.appendChild(daySvg);
    daySvgTemp.appendChild(temp);

    // --- conditions ---
    const conditions = document.createElement("div");
    conditions.classList.add("day-conditions");
    conditions.textContent = day.conditions;

    // --- minmax ---
    const minmax = document.createElement("div");
    minmax.classList.add("day-minmax");
    minmax.textContent = `Min: ${day.tempmin} Max: ${day.tempmax}`;

    // --- Assemble all into container ---
    container.appendChild(dayDate);
    container.appendChild(daySvgTemp);
    container.appendChild(conditions);
    container.appendChild(minmax);
    
    return container;
  }

  return { addListeners }
})();

export { elementHandler }