import React,{Component} from "react";
import {Link} from "react-router-dom";

class MovieCard extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="new_card">
                <div className="new_card_left">
                    <img src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2527484082.webp"/>
                </div>
                <div className="new_card_right">
                    <span>摩天营救</span>
                    <p><a>导演 罗森·马歇尔·瑟伯 主演 道恩·强森 / 内芙·坎贝尔 / 美国 / 6.6分(24124评价)</a></p>
                </div>

            </div>
        );
    }
}
export default MovieCard;