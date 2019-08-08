import React from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import SearchHistory from './SearchHistory';

export default class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='jumbotron'>
          <h1 className='display-4'>Origin Weather App</h1>
          <p className='lead'>Always know if you'll need an umbrella!</p>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <SearchBar />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <SearchResults />
          </div>
          <div className='col-12 col-md-6'>
            <SearchHistory />
          </div>
        </div>
      </div>
    );
  }
}
