import { handleActions } from 'redux-actions';

const response = handleActions({
  'GET_RESPONSE': (state, action) => {
    return { ...action.payload };
  }
}, {});

export default response;