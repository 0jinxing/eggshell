import MovieInfo from "./MovieInfo";
import React from "react";
import "./movieDetails.css";
import Summary from "../Summary/Summary";
import Scoreboard from "./Scoreboard";
import "./scoreboard.css";
const MovieDetails = ({movieDetails}) => {
    let bgi = {
        backgroundImage: `url('${movieDetails.imgurl}')`,
        width:"100%",
        height:"100%",
        backgroundRepeat:"no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
    };
    return (
        <div className="movie-detail-box" style={bgi}>
            <div>
                <h4 className="movie-name">{movieDetails.name}</h4>
            </div>
            <div className="movie-detail-body">
                <div className="movie-cover">
                    <img src={movieDetails.imgurl} alt=""/>
                </div>
                <div className="movie-info">
                    <MovieInfo movieDetails={movieDetails}/>
                </div>
                <div className="scoreboard">
                    <Scoreboard/>
                </div>
            </div>
            <div className="summary">
                <h6>{movieDetails.name}的简介 . . . . .</h6>
                <Summary isShowMore={true} summary={movieDetails.introduction}/>
            </div>
        </div>
    );
};
export default MovieDetails;