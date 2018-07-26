import React from 'react';
import './CommentForReviewInput.css';

export default class CommentForReviewInput extends React.Component {
  render() {
    return (
      <div className="comment-review-input">
        <input type="text" className="form-control mr-2" placeholder="输入回复的内容" />
        <a href="" className="btn btn-outline-info">回复</a>
      </div>
    );
  }
}