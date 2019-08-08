import axios from 'axios';

function getWeatherKey() {
    try {
        return process.env.WEATHER_API_KEY || require('../../../weatherKey');
    }
    catch (error) {
        console.log(`ERROR: Failed to get an OpenWeather API key from either process.env.WEATHER_API_KEY or ../../../weatherKey.js in SearchBarActions.js`);
        return ``;
    }
}

const weatherKey = getWeatherKey();

export function getWeather(cityName) {
    return {
        type: 'GET_WEATHER', //Should probably limit amount of searches per minute at some point
        payload: axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${weatherKey}`)
    }
}

export function updateSearch(input) {
    return {
        type: 'UPDATE_SEARCH_BAR_INPUT',
        payload: { input }
    }
}