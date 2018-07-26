import { handleActions } from 'redux-actions';

const tag = handleActions({
  'GET_LABEL': (state, action) => {
    return { ...state, ...action.payload };
  },
  'GET_MOVIE_FOR_TAG': (state, action) => {
    return {
      ...state,
      ...{ list: [] },
      cur_page: 1,
      total_page: 0,
      ...action.payload
    };
  }
}, {});

export default tag;