import { handleActions } from 'redux-actions';

const review = handleActions({
  'GET_BAST_REVIEW': (state, action) => ({ ...action.payload }),
  'GET_LAST_REVIEW': (state, action) => ({ ...action.payload })
}, {});

export default review;