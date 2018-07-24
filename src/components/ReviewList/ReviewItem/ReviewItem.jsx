import React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import Rating from '../../ReviewDetail/Rating/Rating';
import './ReviewItem.css';

export default class ReviewItem extends React.Component {
  render() {
    let { id, title, comment, support, oppose, createtime, respond_num, movie, userInfo, score, doSupport, doOppose } = this.props;
    return (
      <div className={classnames({
        "review-item media": true,
        [this.props.className]: !!this.props.className,
      })}>
        <img src={movie.imgurl} width="75" alt="" />
        <div className="media-body">
          <div className="user-info">
            <img src={!userInfo ? '' : userInfo.imgurl} width="24" alt="" />
            <a href="#">{!userInfo ? '' : userInfo.nickname}</a>
            <Rating grade={score} />
            <span>{createtime}</span>
          </div>
          <NavLink to={`/review/${id}`}>{title}</NavLink>
          <div className="content">
            <p>{comment.substring(0,200)}</p>
          </div>
          <div className="more">(<NavLink to={`/review/${id}`}>展开</NavLink>)</div>
          <div className="oops">
            <button className="btn btn-outline-primary  mr-2 my-sm-0" onClick={() => doSupport(id)}>有用{support}</button>
            <button className="btn btn-outline-danger mr-2 my-sm-0" onClick={() => doOppose(id)}>没用{oppose}</button>
            <span className="feedback">{respond_num}回应</span>
          </div>
        </div>
      </div>
    );
  }
}