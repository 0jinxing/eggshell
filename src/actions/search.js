import { createAction } from 'redux-actions';
import { showAlert } from './alert';
import * as mUrl from '../url';

export const getSearchResult = createAction('GET_SEARCH_RESULT', data => data);

export const fetchSearch = (kw, page = 1) => {
  return (dispatch) => {
    fetch(`${mUrl.search}?name=${kw}&page${page}`)
      .then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        if (json.code != 1) dispatch(showAlert(json.msg, 2000, "danger"));
        else dispatch(getSearchResult(json.data));
      }).catch();
  };
};