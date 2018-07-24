import { handleActions } from 'redux-actions';

const review = handleActions({
  'GET_BAST_REVIEW': (state, action) => ({ ...action.payload }),
  'GET_LAST_REVIEW': (state, action) => ({ ...action.payload }),
  'REVIEWS_SUPPORT': (state, action) => {
    let newState = { ...state };
    if (newState.reviews) newState.reviews.find(r => r.id == action.payload.id).support = action.payload.support;
    return newState;
  },
  'REVIEWS_OPPOSE': (state, action) => {
    let newState = { ...state };
    if (newState.reviews) newState.reviews.find(r => r.id == action.payload.id).oppose = action.payload.oppose;
    return { ...newState };
  }
}, {});

export default review;