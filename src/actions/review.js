import { createAction } from 'redux-actions';
import * as mUrl from '../url';

export const getBastReview = createAction("GET_BAST_REVIEW", data => data);
export const getLastReview = createAction("GET_LAST_REVIEW", data => data);

export const support = createAction("REVIEWS_SUPPORT", data => data);
export const oppose = createAction("REVIEWS_OPPOSE", data => data);

export const fetchBastReview = (page) => {
  return (dispatch) => {
    fetch(`${mUrl.review_bast}?page=${page}`)
      .then(res => res.json())
      .then(json => {
        dispatch(getBastReview(json.data));
      });
  };
};

export const fetchLastReview = (page) => {
  return (dispatch) => {
    fetch(`${mUrl.review_last}?page=${page}`)
      .then(res => res.json())
      .then(json => {
        dispatch(getLastReview(json.data));
      });
  };
};

export const fetchOppose = (id) => {
  return (dispatch) => {
    fetch(`${mUrl.review_oppose}?film_review_id=${id}`, {
      method: 'PUT',
    }).then(res => res.json())
      .then(json => dispatch(oppose({ id, oppose: json.data })));
  };
};

export const fetchSupport = (id) => {
  return (dispatch) => {
    fetch(`${mUrl.review_support}?film_review_id=${id}`, {
      method: 'PUT',
    }).then(res => res.json())
      .then(json => dispatch(support({ id, support: json.data })));
  };
};