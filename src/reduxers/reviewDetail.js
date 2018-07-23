import { handleActions } from 'redux-actions';

const review = handleActions({
  'REQUEST_REVIEW': (state, action) => ({
    request: true
  }),
  'GET_REVIEW': (state, action) => ({
    request: false,
    ...action.payload
  }),
  'SUPPORT': (state, action) => {
    let newState = { ...state };
    newState.support = action.payload;
    return newState;
  },
  'OPPOSE': (state, action) => {
    let newState = { ...state };
    newState.oppose = action.payload;
    return newState;
  }
}, {});

export default review;