import { createAction } from 'redux-actions';
import * as mUrl from '../url';

export const requestReview = createAction("REQUEST_REVIEW");
export const getReview = createAction("GET_REVIEW", data => data);

export const support = createAction("SUPPORT", data => data);
export const oppose = createAction("OPPOSE", data => data);

export const fetchReview = (id) => {
  return (dispatch) => {
    dispatch(requestReview());
    fetch(`${mUrl.review}/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      credentials: 'include'
    }).then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        dispatch(getReview(json.data));
      }).catch(response => { return; });
  };
};

export const fetchOppose = (id) => {
  return (dispatch) => {
    fetch(`${mUrl.review_oppose}?film_review_id=${id}`, {
      method: 'PUT',
      credentials: 'include'
    }).then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        dispatch(oppose(json.data));
      }).catch(response => { return; });
  };
};

export const fetchSupport = (id) => {
  return (dispatch) => {
    fetch(`${mUrl.review_support}?film_review_id=${id}`, {
      method: 'PUT',
      credentials: 'include'
    }).then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        dispatch(support(json.data));
      }).catch(response => { return; });
  };
};