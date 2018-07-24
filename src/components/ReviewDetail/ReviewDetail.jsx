import React from 'react';
import './ReviewDetail.css';
import Rating from './Rating/Rating';

export default class ReviewDetail extends React.Component {

  componentWillMount() {
    this.props.getReviewDetail(this.props.match.params.id);
  }

  handleSupport = (id) => {
    this.props.doSupport(id);
  };

  handleOppose = (id) => {
    this.props.doOppose(id);
  };

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
              <button onClick={() => this.handleSupport(this.props.match.id)} className="btn btn-outline-primary my-2 my-sm-0">有用 {support}</button>
              <button onClick={() => this.handleOppose(this.props.match.id)} className="btn btn-outline-danger my-2 my-sm-0">没用 {oppose}</button>
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