import React from 'react';
import './Rating.css';

const Rating = ({ grade = 0 }) => {
    let style = {
        backgroundPosition: `0 -${Math.round(10 - (grade > 10 ? 10 : grade)) * 11}px`
    };
    return (
        <p className="review-rating">
            <span className="star" style={style} />
        </p>);
};
export default Rating;