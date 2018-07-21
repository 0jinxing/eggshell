import { combineReducers } from 'redux';
import identity from './identity';
import alert from './alert';
import loading from './loading';
import {rankingPage} from "./rankingPage";

export default combineReducers({
    identity,
    alert,
    loading,
    rankingPage
});