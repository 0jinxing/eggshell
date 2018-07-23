import React, {Component} from "react";

class MovieInfo extends Component {
    constructor(props, {movieDetails}) {
        super(props);
    }
    convert(str) {
        return this.props.movieDetails.director
            ? str.toString()
                .split('/')
                .map((item,index) => (
                        <i key={index}><a href="#">{item}</a></i>
                    )
                )
            : "";
    }
    render() {
        return (
            <ul>
                <li>
                    <span>导演：</span>
                    <span>{this.convert(this.props.movieDetails.director)}</span>
                </li>
                <li>
                    <span>编剧：</span>
                    <span>{this.convert(this.props.movieDetails.scriptwriter)}</span>
                </li>
                <li>
                    <span>主演：</span>
                    <span>{this.convert(this.props.movieDetails.actor)}</span>
                </li>
                <li>
                    <span>类型：</span>
                    <span>{this.props.movieDetails.style}</span>
                </li>
                <li>
                    <span>制片国家/地区：</span>
                    <span>{this.props.movieDetails.area}</span>
                </li>
                <li>
                    <span>语言：</span>
                    <span>{this.props.movieDetails.language}</span>
                </li>
                <li>
                    <span>上映日期：</span>
                    <span>{this.props.movieDetails.release_date}</span>
                </li>
                <li>
                    <span>片长：</span>
                    <span>{this.props.movieDetails.running_time}分钟</span>
                </li>
                <li>
                    <span>别名：</span>
                    <span>{this.props.movieDetails.alias}</span>
                </li>
            </ul>
        );
    }
}

export default MovieInfo;