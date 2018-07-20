import React, { Component } from 'react';
import './Rating.css';

class Rating extends Component {
    render() {
        let style = {
            backgroundPosition: `0 -${Math.round(10 - 9) * 11}px`
        };
        return (
            <p className="rating">
                <span className="star" style={style}></span>
                <span className="score">7.9</span>
                <span>(67994人评价)</span>
            </p>);
    }
}

export default Rating;