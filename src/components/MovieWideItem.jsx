import React, {Component} from 'react';
import Rating from './Rating/Rating';

const MovieWideItem = ({film}) => {
    let style = {
        cursor:"pointer"
    };
    return (
        <div className="movie-wide-item media mt-4 col-md-6 col-sm-12">
            <img style={style} width="75" className="mr-3" src={film.imgurl} alt="Generic placeholder image"/>
            <div className="media-body">
                <a className="movie-name" href="#">{film.name}</a>
                <p className="description">{film.detail}</p>
                <Rating grade={film.grade} commentNum={film.comment_num}/>
            </div>
            <div className='media-footer'>

            </div>
        </div>
    );
};
export default MovieWideItem;