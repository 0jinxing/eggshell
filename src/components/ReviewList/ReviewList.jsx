import React from 'react';
import './ReviewList.css';
import ReviewItem from './ReviewItem/ReviewItem';

export default class ReviewList extends React.Component {
  render() {
    let contentEl = [1, 2].map((item, index) => <ReviewItem className="review" key={index} />);
    return (
      <div className="container review-list">
        <h3 className='mt-4 mb-4 font-weight-light border-bottom p-2'>最受欢迎的影评</h3>
        <div className="list">
          {contentEl}
        </div>
      </div>
    );
  }
}