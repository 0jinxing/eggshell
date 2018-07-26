import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import './ReviewDetail.css';
import Rating from './Rating/Rating';

export default class ReviewDetail extends React.Component {

  componentWillMount() {
    this.props.getReviewDetail(this.props.match.params.id);
    this.props.getResponse(this.props.match.params.id, 1);
  }

  handleSupport = (id) => {
    this.props.doSupport(id);
  };

  handleOppose = (id) => {
    this.props.doOppose(id);
  };

  handlePage = (page) => {
    this.props.getResponse(this.props.match.params.id, page);
  };

  handleResponse = (comment) => {
    if (!comment.trim()) return;
    this.props.addResponse(this.props.match.params.id, comment);
    this.props.getResponse(this.props.match.params.id, this.props.cur_page);
  }

  render() {
    let { comment, createtime, id, isdelete, movie, oppose, score, support, title, userInfo } = this.props;
    let contentEl = !comment ? '' : comment.split("\n").filter(str => !!str.trim()).map((str, index) => {
      return (
        <p key={index}>{str.trim()}</p>
      );
    });
    // console.log(this.props.match.id);
    return (
      <div className="review-detail container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <h4 className="title">{title}</h4>
            <div className="user-info">
              <img src="https://img3.doubanio.com/icon/u180957030-2.jpg" width="24" className="avatar" alt="" />
              <a href="#">{!userInfo ? '' : userInfo.nickname}</a>
              <span>评论</span>
              <a href="#">{!movie ? '' : movie.name}</a>
              <Rating grade={!score ? 0 : score.star} />
              <span>{createtime}</span>
            </div>
            <div className="content">
              {contentEl}
            </div>
            <div className="oops d-flex justify-content-center">
              <button onClick={() => this.handleSupport(id)} className="btn btn-outline-primary my-2 my-sm-0">有用 {support}</button>
              <button onClick={() => this.handleOppose(id)} className="btn btn-outline-danger my-2 my-sm-0">没用 {oppose}</button>
            </div>
            {
              (!this.props.list ? [] : this.props.list).map((el, ind) => (
                <div className="comment-review" key={ind}>
                  <img src={el.userInfo.imgurl} className="mr-2" width="24" alt="" />
                  <span className="nickname">{el.userInfo.nickname}</span>
                  <span className="create-time">{el.createtime}</span>
                  <p>{el.comment}</p>
                </div>
              ))
            }
            {
              !!this.props.list && !!this.props.list.length && (<nav className="mt-4">
                <ul className="pagination justify-content-center">
                  <li className={classnames({
                    "page-item": true,
                    "disabled": this.props.cur_page <= 1
                  })} onClick={() => this.handlePage(Math.max(this.props.cur_page - 1, 1))}>
                    <a className="page-link" href="#" tabIndex="-1">Previous</a>
                  </li>
                  {
                    [...Array(this.props.total_page).keys()].slice(Math.max(this.props.cur_page - 1, this.props.total_page - 5), Math.min(this.props.cur_page + 5, this.props.total_page)).map((num, index) => (
                      <li key={index} className={classnames({
                        "page-item": true,
                        "disabled": this.props.cur_page == num + 1
                      })} onClick={() => this.handlePage(num + 1)}><a className="page-link" href="#">{num + 1}</a></li>
                    ))
                  }
                  <li className={classnames({
                    "page-item": true,
                    "disabled": this.props.cur_page >= this.props.total_page
                  })} onClick={() => this.handlePage(Math.min(this.props.cur_page + 1, this.props.total_page))}>
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>)
            }


            <div className="comment-review-input mt-4">
              <input type="text" className="form-control mr-2" placeholder="输入回复的内容" ref="responseInput" />
              {
                this.props.logined && <button onClick={() => this.handleResponse(this.refs.responseInput.value)} className="btn btn-outline-info">回复</button> ||
                <NavLink to="/identity/login" className="btn btn-outline-info">回复</NavLink>
              }
            </div>


          </div>
          <div className="col-md-4 col-sm-12">
            <div className="movie">
              <a href="#">{!movie ? '' : movie.name}</a>
              <img src={!movie ? '' : movie.imgurl} width="100" alt="电影封面" />
              <ul>
                <li><span>导演：</span>{!movie ? '' : movie.director}</li>
                <li><span>主演：</span>{!movie ? '' : movie.actor}</li>
                <li><span>类型：</span>{!movie ? '' : movie.style}</li>
                <li><span>地区：</span>{!movie ? '' : movie.area}</li>
              </ul>
            </div>
            <div className="more">
              <h5>更多{!movie ? '' : movie.name}的影评...</h5>
              <ul className="list">
                <li>
                  <a href="#">父亲亲赴印度买药记</a>
                  <span>春乏夏困秋打盹</span><Rating grade={10} />
                </li>
                <li>
                  <a href="#">父亲亲赴印度买药记</a>
                  <span>春乏夏困秋打盹</span><Rating grade={10} />
                </li>                <li>
                  <a href="#">父亲亲赴印度买药记</a>
                  <span>春乏夏困秋打盹</span><Rating grade={10} />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}