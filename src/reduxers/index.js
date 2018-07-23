import { combineReducers } from 'redux';
import identity from './identity';
import alert from './alert';
import loading from './loading';
import { rankingPage } from "./rankingPage";
import { networkReconnect } from "./networkReconnect";
import user from './user';
import { movieDetails } from "./movieDetails";
import reviewDetail from './reviewDetail';

export default combineReducers({
    identity,
    alert,
    loading,
    rankingPage,
    networkReconnect,
    user,
    movieDetails,
    reviewDetail
});