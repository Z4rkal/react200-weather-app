import SearchBar from './SearchBar';
import { connect } from'react-redux';

function mapStoreToProps(store) {
    return {
        searchInput: store.SearchBar.searchInput || ''
    };
}

export default connect(mapStoreToProps)(SearchBar);