import { createAction } from 'redux-actions';
import * as mUrl from '../url';

const getLabel = createAction("GET_LABEL", data => data);
const getMovieForTag = createAction("GET_MOVIE_FOR_TAG", data => data);

export const fetchTag = () => {
  return (dispatch) => {
    fetch(mUrl.get_label, {
      method: 'GET',
      credentials: 'include'
    })
      .then(response => response.ok && response.json())
      .then(json => {
        if (!json) return;
        dispatch(getLabel(json.data));
      })
      .catch();
  };
};

export const fetchMovieForTag = (sort = '', range = '', tags = '', page = '') => {
  const query = `sort=${sort}&range=${range}&tags=${tags}&page=${page}`;
  return (dispatch) => {
    fetch(`${mUrl.get_movie_for_tag}?${query}`)
      .then(res => res.ok&&res.json())
      .then(json =>{ 
        if(!json) return;
        dispatch(getMovieForTag(json.data));
      }).catch();
  };
};