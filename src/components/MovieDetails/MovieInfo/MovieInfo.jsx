import React, {Component} from "react";
import "./movieInfo.css";
class MovieInfo extends Component {
    constructor(props, {movieDetails}) {
        super(props);
    }

    convert(str) {
        return this.props.movieDetails.director
            ? str.toString()
                .split('/')
                .map((item, index) => (
                        <i key={index}><a href="#">{item}</a></i>
                    )
                )
            : "";
    }

    render() {
        return (
            <ul className="movie-info">
                <li>
                    <span>导演：</span>
                    <span>{this.convert(this.props.movieDetails.director)||"未知！"}</span>
                </li>
                <li>
                    <span>编剧：</span>
                    <span>{this.convert(this.props.movieDetails.scriptwriter)||"未知！"}</span>
                </li>
                <li>
                    <span>主演：</span>
                    <span>{this.convert(this.props.movieDetails.actor)||"未知！"}</span>
                </li>
                <li>
                    <span>类型：</span>
                    <span>{this.props.movieDetails.style||"未知！"}</span>
                </li>
                <li>
                    <span>制片国家/地区：</span>
                    <span>{this.props.movieDetails.area||"未知！"}</span>
                </li>
                <li>
                    <span>语言：</span>
                    <span>{this.props.movieDetails.language||"未知！"}</span>
                </li>
                <li>
                    <span>上映日期：</span>
                    <span>{this.props.movieDetails.release_date||"未知！"}</span>
                </li>
                <li>
                    <span>片长：</span>
                    <span>{this.props.movieDetails.running_time||"未知！"}分钟</span>
                </li>
                <li>
                    <span>别名：</span>
                    <span>{this.props.movieDetails.alias||"未知！"}</span>
                </li>
            </ul>
        );
    }
}
export default MovieInfo;