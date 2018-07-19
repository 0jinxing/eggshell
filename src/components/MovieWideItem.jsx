import React, { Component } from 'react';

class MovieWideItem extends Component {
    render() {
        return (
            <div className="media">
                <img width="75" className="mr-3" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p480747492.jpg" alt="Generic placeholder image" />
                <div className="media-body">
                    <a href="#">Media heading</a>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci inventore reprehenderit, quis corrupti dignissimos cum voluptatum. Ullam minus cupiditate, soluta doloremque, necessitatibus ducimus autem quam dolorem delectus voluptates amet quo!</p>
                </div>
            </div>
        );
    }
}

export default MovieWideItem;