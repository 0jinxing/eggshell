import React, {Component} from 'react';
import Rating from '../Rating/Rating';
import "./MovieWideItem.css";
import Summary from "../Summary/Summary";
import {Link} from "react-router-dom";

const MovieWideItem = ({film}) => {
    return (
        <div className="movie-wide-item media mt-4 col-md-6 col-sm-12">
            <Link to={`/movie/details/${film.id}`}>
                <img width="75" className="mr-3" src={film.imgurl} alt="Generic placeholder image"/>
            </Link>
            <div className="movie-wide-item-body">
                <Link className="movie-name" to={`/movie/details/${film.id}`}>{film.name}</Link>
                <Summary summary={film.detail}/>
                <Rating grade={film.grade} commentNum={film.comment_num}/>
            </div>
            <div className='movie-wide-item-footer'>
            </div>
        </div>
    );
};
export default MovieWideItem;