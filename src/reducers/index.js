import { combineReducers } from 'redux';
import userReducers from './user';
import loadingReducers from './loading';
import newsReducers from './news';

const rootReducers = combineReducers({
    user:userReducers,
    loadingReducers:loadingReducers,
    newsReducers:newsReducers,
    
});

export default rootReducers;


