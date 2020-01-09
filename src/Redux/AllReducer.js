import {combineReducers} from 'redux';
import stored_data from './Reducer';
import auth_reducer from './AuthReducer';

const allReducers = combineReducers ({
    
    comments: stored_data,
    auth:auth_reducer,
})
export default allReducers