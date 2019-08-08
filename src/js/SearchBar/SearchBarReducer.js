const defaultState = {
    searchInput: '',
    currentWeatherData: {},
    searchHistory: [],
};

function kelvinToFahrenheit(kelvin) {
    return `${Math.round(100 * ((9 * (kelvin - 273) / 5) + 32)) / 100}F`;
}

function metersPerSecondToMPH(speed) {
    const metersPerHour = speed * 3600; //Convert to meters per hour
    const milesPerHour = Math.round((metersPerHour / 1609.344) * 100) / 100;

    return `${milesPerHour}mph`;
}

export default function SearchBarReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case 'UPDATE_SEARCH_BAR_INPUT': {
            const searchInput = payload.input;
            return { ...state, searchInput }
        }

        case 'GET_WEATHER_PENDING': {
            return state;
        }

        case 'GET_WEATHER_FULFILLED': {
            const { name, coord, main, wind, weather } = payload.data;
            const date = new Date().toUTCString();
            
            return {
                currentWeatherData: {
                    name,
                    coord,
                    humidity: `${main.humidity}%`,
                    pressure: main.pressure,
                    temp: {
                        current: kelvinToFahrenheit(main.temp),
                        high: kelvinToFahrenheit(main.temp_max),
                        low: kelvinToFahrenheit(main.temp_min)
                    },
                    wind: metersPerSecondToMPH(wind.speed),
                    iconId: weather[0].icon,
                    exists: true //Create a property that we can easily check to see wheter
                },
                searchHistory: [...state.searchHistory, { name, date }]
            };
        }

        case 'GET_WEATHER_REJECTED': {
            const name = state.searchInput;
            const date = new Date().toUTCString();

            return {
                currentWeatherData: { name, exists: true, isError: true },
                searchHistory: [...state.searchHistory, { name, date }]
            };
        }

        default: {
            return state;
        }
    }
}

            // name: "Seattle"
            // coord: {lon: -122.33, lat: 47.6}
            // main:
            //     humidity: 63
            //     pressure: 1016
            //     temp: 291.07
            //     temp_max: 292.59
            //     temp_min: 289.82
            // wind:
            //     speed: 2.6
            // weather: Array(1)
            //     0:  
            //         id: 804