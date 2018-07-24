import { createAction } from 'redux-actions';
import * as mUrl from '../url';

export const requestReview = createAction("REQUEST_REVIEW");
export const getReview = createAction("GET_REVIEW", data => data);

export const support = createAction("SUPPORT", data => data);
export const oppose = createAction("OPPOSE", data => data);

export const fetchReview = (id) => {
  return (dispatch) => {
    dispatch(requestReview());
    fetch(`${mUrl.review}?film_review_id=${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      credentials: 'include'
    }).then(response => response.json())
      .then(json => {
        dispatch(getReview(json.data));
      });
  };
};

export const fetchOppose = (id) => {
  return (dispatch) => {
    fetch(mUrl.review_oppose, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "content-type": ""
      },
      body: `film_review_id=${id}`
    }).then(res => res.json())
      .then(json => dispatch(oppose(json.data)));
  };
};

export const fetchSupport = (id) => {
  return (dispatch) => {
    fetch(mUrl.review_support, {
      method: 'PUT',
      headers: {
        "Accept": "application/json",
        "content-type": ""
      },
      body: `film_review_id=${id}`
    }).then(res => res.json())
      .then(json => dispatch(support(json.data)));
  };
};