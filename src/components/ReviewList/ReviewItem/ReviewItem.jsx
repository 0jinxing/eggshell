import React from 'react';
import classnames from 'classnames';
import Rating from '../../ReviewDetail/Rating/Rating';
import './ReviewItem.css';

export default class ReviewItem extends React.Component {
  render() {
    return (
      <div className={classnames({
        "review-item media": true,
        [this.props.className]: !!this.props.className,
      })}>
        <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527484082.webp" width="75" alt="" />
        <div className="media-body">
          <div className="user-info">
            <img src="https://img3.doubanio.com/icon/u174069134-1.jpg" width="24" alt="" />
            <a href="#">雪狼</a>
            <Rating grade={5} />
            <span>2018-07-22 01:24:17</span>
          </div>
          <a href="#">建筑设计师谈谈电影中的大楼设计</a>
          <div className="content">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit impedit odio error quod corporis autem officia voluptatem, eaque tempora, maiores nobis atque ducimus id ipsum soluta, aspernatur veniam velit quasi!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit impedit odio error quod corporis autem officia voluptatem, eaque tempora, maiores nobis atque ducimus id ipsum soluta, aspernatur veniam velit quasi!</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit impedit odio error quod corporis autem officia voluptatem, eaque tempora, maiores nobis atque ducimus id ipsum soluta, aspernatur veniam velit quasi!</p>
          </div>
          <div className="more">(<a href="#">展开</a>)</div>
          <div className="oops">
            <button className="btn btn-outline-primary  mr-2 my-sm-0">有用49</button>
            <button className="btn btn-outline-danger mr-2 my-sm-0">没用32</button>
            <span className="feedback">10回应</span>
          </div>
        </div>
      </div>
    );
  }
}