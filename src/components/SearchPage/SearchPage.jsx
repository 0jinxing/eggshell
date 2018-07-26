import React from 'react';
import MovieItem from '../Classification/MovieItem';
import './SearchPage.css';

export default class SearchPage extends React.Component {
  componentWillMount() {
    this.props.doSearch(this.props.match.params.kw, 1);
  }
  render() {
    return (
      <div className="search-page">
        <h3 className="mt-4 mb-4 font-weight-light border-bottom p-2">搜索结果</h3>
        <div className="movie-list">
          {
            (!this.props.list || !this.props.list.length ? [] : this.props.list).map((el, ind) => (
              <MovieItem {...el} key={ind} />
            ))
          }
        </div>
      </div>);
  }
}