import { createAction } from 'redux-actions';
export const getResponse = createAction('GET_RESPONSE', data => data);
export const postResponse = createAction('POST_RESPONSE', data => data);

export const fetchGetResponse = () => {
  return (dispatch) => {
  };
};