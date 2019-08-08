const express = require('express');
const morgan = require('morgan');
const axios = require('axios');
const { json } = require('body-parser');

const app = express();

app.use(json());

function getWeatherKey() {
    try {
        return process.env.WEATHER_API_KEY || require('./weatherKey');
    }
    catch (error) {
        throw new Error(`ERROR: Failed to get an OpenWeather API key from either process.env.WEATHER_API_KEY or ./weatherKey.js in SearchBarActions.js`);
    }
}

const WEATHER_KEY = getWeatherKey();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.post('/api/weather', (req, res) => {
    const { cityName } = req.body;

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${WEATHER_KEY}`)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch((error) => {
            res.status(404).send(error);
        });
})

module.exports = app;
