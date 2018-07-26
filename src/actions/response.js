import { createAction } from 'redux-actions';
import { showAlert } from './alert';
import * as mUrl from '../url';

export const getResponse = createAction('GET_RESPONSE', data => data);
export const postResponse = createAction('POST_RESPONSE', data => data);

export const fetchGetResponse = (film_review_id, page) => {
  return (dispatch) => {
    fetch(`${mUrl.response}?film_review_id=${film_review_id}&page=${page}`, {
      credentials: 'include'
    })
      .then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        dispatch(getResponse(json.data));
      })
      .catch();
  };
};

export const fetchPostResponse = (film_review_id, comment) => {
  return (dispatch) => {
    fetch(mUrl.response, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      body: `film_review_id=${film_review_id}&comment=${comment}`,
      credentials: 'include'
    }).then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        if (json.code != 1) dispatch(showAlert(json.msg, 2000, "danger"));
      });
  };
};