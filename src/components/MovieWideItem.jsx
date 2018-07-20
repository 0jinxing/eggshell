import React, { Component } from 'react';
import Rating from './Rating/Rating';

class MovieWideItem extends Component {
    render() {
        return (
            <div className="movie-wide-item media mt-4 col-md-6 col-sm-12">
                <img width="75" className="mr-3" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                    <a className="movie-name" href="#">Media heading</a>
                    <p className="description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore reprehenderit, quis corrupti dignissimos cum voluptatum. Ullam minus cupiditate, soluta doloremque, necessitatibus ducimus autem quam dolorem delectus voluptates amet quo!</p>
                    <Rating />
                </div>
                <div className='media-footer'>
                </div>
            </div>
        );
    }
}

export default MovieWideItem;