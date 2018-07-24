import { createAction } from 'redux-actions';
import * as mUrl from '../url';

export const getBastReview = createAction("GET_BAST_REVIEW", data => data);
export const getLastReview = createAction("GET_LAST_REVIEW", data => data);

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