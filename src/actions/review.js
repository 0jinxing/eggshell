import { createAction } from 'redux-actions';
import { showAlert } from './alert';
import * as mUrl from '../url';

export const getBastReview = createAction("GET_BAST_REVIEW", data => data);
export const getLastReview = createAction("GET_LAST_REVIEW", data => data);

export const support = createAction("REVIEWS_SUPPORT", data => data);
export const oppose = createAction("REVIEWS_OPPOSE", data => data);

export const fetchBastReview = (page) => {
  return (dispatch) => {
    fetch(`${mUrl.review_bast}?page=${page}`, {
      credentials: 'include'
    })
      .then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        if (json.code != 1) dispatch(showAlert(json.msg, 2000, "danger"));
        dispatch(getBastReview(json.data));
      }).catch();
  };
};

export const fetchLastReview = (page) => {
  return (dispatch) => {
    fetch(`${mUrl.review_last}?page=${page}`, {
      credentials: 'include'
    })
      .then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        if (json.code != 1) dispatch(showAlert(json.msg, 2000, "danger"));
        dispatch(getLastReview(json.data));
      }).catch();
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
        if (json.code != 1) dispatch(showAlert(json.msg, 2000, "danger"));
        dispatch(oppose({ id, oppose: json.data }));
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
        if (json.code != 1) dispatch(showAlert(json.msg, 2000, "danger"));
        dispatch(support({ id, support: json.data }));
      }).catch(response => { return; });
  };
};