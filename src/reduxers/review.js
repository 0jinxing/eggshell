import { handleActions } from 'redux-actions';
import { getBast, requestBast } from '../actions/review';

const review = handleActions({
  'GET_BAST': (state, action) => ({
    data: action.data,
    request: false
  }),
  'REQUEST_BAST': (state, action) => ({
    request: true
  })
}, {}); 