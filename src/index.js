import './styles.css';

import { elementHandler } from './userInterface.js';
import { APIHandler } from './weatherAPI.js';

//elementHandler.addListeners();

console.log(APIHandler.getWeatherData('Morioka'));
