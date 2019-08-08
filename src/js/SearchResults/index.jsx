import SearchResults from './SearchResults';
import { connect } from 'react-redux';

function mapStoreToProps(store) {
    return {
        currentWeatherData: store.SearchBar.currentWeatherData
    };
}

export default connect(mapStoreToProps)(SearchResults);