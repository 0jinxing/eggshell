import React from 'react';
import MovieItem from './MovieItem';
import classnames from 'classnames';

import './Classification.css';
import { movie } from '../../url';

export default class Classification extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      style: '',
      area: '',
      sort: 'H',
      page: '',
      min: 0,
      max: 10,
    };
  }

  componentWillMount() {
    this.props.getTag();
    this.props.getMovieForTag();
  }

  handleStyle = (e) => {
    if (e.target.tagName.toUpperCase() === "DL") return;
    const style = e.target.innerText.trim().includes("全部") ? '' : e.target.innerText.trim();
    this.setState({ style });
    setTimeout(this.invalid, 0);
  };

  handleArea = (e) => {
    if (e.target.tagName.toUpperCase() === "DL") return;
    const area = e.target.innerText.trim().includes("全部") ? '' : e.target.innerText.trim();
    this.setState({ area: area.trim() });
    setTimeout(this.invalid, 0);
  };

  handleSort = (sort) => {
    this.setState({ sort: sort.trim() });
    setTimeout(this.invalid, 0);
  };

  handleRange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handlePage = (page) => {
    this.setState({
      page: Math.min(Math.max(0, page), this.props.total_page),
    });
    setTimeout(this.invalid, 0);
  };

  invalid = () => {
    let { style, area, sort, page, min, max } = this.state;
    let tags = !style ? area : `${style},${area}`;
    this.props.getMovieForTag(sort, `${min},${max}`, tags, page);
  };

  render() {
    return (
      <div className="classification">
        <div className="m-tag">
          <dl className="styles">
            <dt onClick={this.handleStyle} className={classnames({
              'active': this.state.style == ''
            })}>全部类型</dt>
            {!this.props.style_list ? '' : this.props.style_list.map((style, index) => (
              <dd onClick={this.handleStyle} className={classnames({
                "active": style.name.trim() == this.state.style
              })} key={index}>{style.name}</dd>
            ))}
          </dl>
          <dl className="areas">
            <dt onClick={this.handleArea} className={classnames({
              'active': this.state.area == ''
            })}>全部地区</dt>
            {!this.props.area_list ? '' : this.props.area_list.map((area, index) => (
              <dd onClick={this.handleArea} key={index} className={classnames({
                "active": area.name.trim() == this.state.area
              })}>{area.name}</dd>
            ))}
          </dl>
        </div>
        <div className="filter-bar">
          <div className="sort">
            <button className={classnames({ "active": this.state.sort == "H" })} onClick={() => this.handleSort('H')}>按热度排序</button>
            <button className={classnames({ "active": this.state.sort == "T" })} onClick={() => this.handleSort('T')}>按时间排序</button>
            <button className={classnames({ "active": this.state.sort == "G" })} onClick={() => this.handleSort('G')}>按评分排序</button>
          </div>
          <div className="score">
            <span className="title">评分区间筛选：</span>
            <span>最低评分</span>
            <input type="number" min="0" max="10" value={this.state.min} name="min" onChange={this.handleRange} />
            <span>最高评分</span>
            <input type="number" min="0" max="10" value={this.state.max} name="max" onChange={this.handleRange} />
            <button className="score-filter-btn" onClick={this.invalid}>筛选</button>
          </div>
        </div>
        <div className="movie-list">
          {
            (!this.props.list ? [] : this.props.list).map((movie, index) => {
              return <MovieItem key={index} {...movie} />;
            })
          }
        </div>
        <nav className="mt-4">
          <ul className="pagination justify-content-center">
            <li className={classnames({
              "page-item": true,
              "disabled": this.props.cur_page <= 1
            })} onClick={() => this.handlePage(Math.max(this.props.cur_page - 1, 1))}>
              <a className="page-link" href="#" tabIndex="-1">Previous</a>
            </li>
            {
              [...Array(this.props.total_page).keys()].slice(0, this.props.total_page).map((num, index) => (
                <li key={index} className={classnames({
                  "page-item": true,
                  "disabled": this.props.cur_page == num + 1
                })} onClick={() => this.handlePage(num + 1)}><a className="page-link" href="#">{num + 1}</a></li>
              ))
            }
            <li className={classnames({
              "page-item": true,
              "disabled": this.props.cur_page == this.props.total_page
            })} onClick={() => this.handlePage(Math.min(this.props.cur_page + 1, this.props.total_page))}>
              <a className="page-link" href="#">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}