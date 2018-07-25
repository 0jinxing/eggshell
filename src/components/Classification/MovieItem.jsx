import React from 'react';
import { NavLink } from 'react-router-dom';
import './MovieItem.css';

export default class MovieItem extends React.Component {
  render() {
    return (
      <div className="m-movie-item">
        <NavLink to={`/movie/details/${this.props.id}`}>
          <img src={this.props.imgurl} width="115" alt="" />
          <div className="info">
            <span className="name">{this.props.name}</span>
            <span className="score">{this.props.grade}</span>
          </div>
        </NavLink>
      </div>
    );
  }
}