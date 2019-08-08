import axios from 'axios';

export function getWeather(cityName) {
    return {
        type: 'GET_WEATHER', //Should probably limit amount of searches per minute at some point
        payload: axios.post(`/api/weather`, { cityName })
    }
}

export function updateSearch(input) {
    return {
        type: 'UPDATE_SEARCH_BAR_INPUT',
        payload: { input }
    }
}