import React, {Component} from 'react';
import './Rating.css';

const Rating = ({grade = 0,commentNum = 0}) => {
    let style = {
        backgroundPosition: `0 -${Math.round(10 - 9) * 11}px`
    };
    return (
        <p className="rating">
            <span className="star" style={style}/>
            <span className="score">{grade}</span>
            <span>({commentNum}评价)</span>
        </p>);
};

export default Rating;