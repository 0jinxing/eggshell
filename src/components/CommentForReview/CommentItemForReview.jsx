import React from 'react';
import './CommentItemForReview.css';

export default class CommentItemForReview extends React.Component {
  render() {
    return (
      <div className="comment-review">
        <span className="nickname">西楼尘</span>
        <span className="create-time">2018-03-27</span>
        <p>老板儿子吃真空羊肉，贪婪绞入碎肉机；屠夫儿子喝污染井水，正义只在电视屏。戳瞎左眼，被戳伤的同乡都能包庇；咬断舌头，被救助的律师却不敢发声。凭蛮力垒不成金字塔，靠假声变不成兔子妈。超人面具如同良心咒，送不回原主；寻子告示像是招魂符，在风里飘摇。真相埋进泥土，藏入山洞，终于再无人知。</p>
      </div>
    );
  }
}