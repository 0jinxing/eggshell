import { handleActions } from 'redux-actions';

const search = handleActions({
  "GET_SEARCH_RESULT": (state, action) => {
    return {...action.payload};
  }
}, {});

export default search;