import SearchHistory from './SearchHistory';
import { connect } from'react-redux';

function mapStoreToProps(store) {
    return {
        searchHistory: store.SearchBar.searchHistory
    };
}

export default connect(mapStoreToProps)(SearchHistory);