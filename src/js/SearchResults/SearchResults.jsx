import React, { Component } from 'react';

class SearchResults extends Component {
    render() {
        const weather = this.props.currentWeatherData;

        if (!weather.exists) return (
            <div className='card border-info'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                    <p className='card-text'>Search for a city by using the search bar or buttons above to get weather information for that city!</p>
                </div>
            </div>
        )

        if (weather.isError) return (
            <div className='card border-info'>
                <div className='card-header text-white bg-info'>Error</div>
                <div className='card-body'>
                    <h5 className='card-title'>Sorry, the api couldn't find any data on {weather.name} :(</h5>
                    <p className='card-text'>Please check for mispellings and try again, or try searching for a different city.</p>
                </div>
            </div>
        )

        const { name, coord, humidity, pressure, temp, wind, iconId } = weather;
        return (
            <div className='card border-info'>
                <div className='card-header text-white bg-info'>City Information</div>
                <div className='card-body'>
                    <div className='row'>
                        <div className='col'></div>
                        <div id='weather-data-title' className='col-auto'>
                            <img id='weather-data-icon' className='px-0' src={`http://openweathermap.org/img/wn/${iconId}@2x.png`} width='42' height='42' />
                            <span id='weather-data-city' className='px-0'>{name}</span>
                        </div>
                        <div className='col'></div>
                        <div className='col-12'>
                            <div className='row'>
                                <div className='col'></div>
                                <div id='lat-lon' className='col-auto'>Lat/Lon: {coord.lat},{coord.lon}</div>
                                <div className='col'></div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='row'>
                        <div className='col-6 col-sm-4'>
                            <div className='row'>
                                <p className='col-12 weather-data-label'>Temperature</p>
                                <p className='col-12 weather-data'>{temp.current}</p>
                            </div>
                        </div>
                        <div className='col-6 col-sm-4'>
                            <div className='row'>
                                <p className='col-12 weather-data-label'>Pressure</p>
                                <p className='col-12 weather-data'>{pressure}</p>
                            </div>
                        </div>
                        <div className='col-6 col-sm-4'>
                            <div className='row'>
                                <p className='col-12 weather-data-label'>Humidity</p>
                                <p className='col-12 weather-data'>{humidity}</p>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 col-sm-4'>
                            <div className='row'>
                                <p className='col-12 weather-data-label'>Lowest Temp</p>
                                <p className='col-12 weather-data'>{temp.low}</p>
                            </div>
                        </div>
                        <div className='col-6 col-sm-4'>
                            <div className='row'>
                                <p className='col-12 weather-data-label'>Highest Temp</p>
                                <p className='col-12 weather-data'>{temp.high}</p>
                            </div>
                        </div>
                        <div className='col-6 col-sm-4'>
                            <div className='row'>
                                <p className='col-12 weather-data-label'>Wind Speed</p>
                                <p className='col-12 weather-data'>{wind}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default SearchResults;