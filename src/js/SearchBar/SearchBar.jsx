import React, { Component } from 'react';

import { getWeather, updateSearch } from './SearchBarActions';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.submitSearch = this.submitSearch.bind(this);
        this.handleSearchInput = this.handleSearchInput.bind(this);
    }

    submitSearch(cityName) {
        const { dispatch } = this.props;
        dispatch(getWeather(encodeURI(cityName)));
    }

    handleSearchInput(event) {
        const { dispatch } = this.props;
        const value = event.target.value;
        dispatch(updateSearch(value));
    }

    render() {
        const { searchInput } = this.props;
        return (
            <React.Fragment>
                <div id='example-cities' className='btn-group' role='group'>
                    <button type='button' className='btn btn-outline-info' onClick={() => this.submitSearch('San Diego')}>San Diego</button>
                    <button type='button' className='btn btn-outline-info' onClick={() => this.submitSearch('New York')}>New York</button>
                    <button type='button' className='btn btn-outline-info' onClick={() => this.submitSearch('District of Columbia')}>Washington D.C.</button>
                    <button type='button' className='btn btn-outline-info' onClick={() => this.submitSearch('London')}>London</button>
                    <button type='button' className='btn btn-outline-info' onClick={() => this.submitSearch('Tokyo')}>Tokyo</button>
                </div>
                <div className='input-group'>
                    <input id='search-bar' className='form-control' type='text' value={searchInput} onChange={this.handleSearchInput} onKeyDown={(e) => { if (e.key === 'Enter') this.submitSearch(searchInput); }} />
                    <div className='input-group-append'>
                        <button className='btn btn-outline-secondary' type='button' onClick={() => this.submitSearch(searchInput)}>Go!</button>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SearchBar;