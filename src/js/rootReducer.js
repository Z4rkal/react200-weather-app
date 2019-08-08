import { combineReducers } from 'redux';
import SearchBarReducer from './SearchBar/SearchBarReducer';

const rootReducer = combineReducers({
    SearchBar: SearchBarReducer
});

export default rootReducer;
