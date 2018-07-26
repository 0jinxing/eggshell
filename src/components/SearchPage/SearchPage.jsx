import React from 'react';
import classnames from 'classnames';
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
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={classnames({
              "page-item": true,
              "disabled": this.props.cur_page <= 1
            })}>
              <a className="page-link" href="#" tabIndex="-1" onClick={() => {
                if (this.props.cur_page > 1) this.props.doSearch(this.props.match.params.kw, this.props.cur_page - 1);
              }}>Previous</a>
            </li>
            {
              [...Array(this.props.total_page).keys()].slice(Math.max(this.props.cur_page - 1, this.props.total_page - 5), Math.min(this.props.cur_page + 5, this.props.total_page)).map((num, index) => (
                <li key={index} onClick={() => this.props.doSearch(this.props.match.params.kw, num + 1)} className={classnames({
                  "page-item": true,
                  "disabled": num + 1 == this.props.cur_page
                })}><a className="page-link" href="#">{num + 1}</a></li>
              ))
            }
            <li className={classnames({
              "page-item": true,
              "disabled": this.props.cur_page >= this.props.total_page
            })}>
              <a className="page-link" href="#" onClick={() => {
                if (this.props.cur_page < this.props.total_page) this.props.doSearch(this.props.match.params.kw, this.props.cur_page + 1);
              }} >Next</a>
            </li>
          </ul>
        </nav>
      </div>);
  }
}