import { combineReducers } from 'redux';
import identity from './identity';
import alert from './alert';

export default combineReducers({
    identity,
    alert
});