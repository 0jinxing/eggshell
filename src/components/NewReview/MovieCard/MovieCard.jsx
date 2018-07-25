import React, {Component} from "react";
import {Link} from "react-router-dom";
import "./movieCard.css";

class MovieCard extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            ...props
        };
    }

    render() {
        return (
            <div className="new_card">
                <div className="new_card_left">
                    <img src={this.state.imgurl}/>
                </div>
                <div className="new_card_right">
                    <span>{this.state.name}</span>
                    <p>
                        <Link to="">
                            {this.state.scriptwriter + "    "}
                            {this.state.grade + "分   "}
                            ({this.state.commentNum+ "评价"})
                        </Link>
                    </p>
                </div>

            </div>
        );
    }
}

export default MovieCard;