import MovieInfo from "../MovieInfo/MovieInfo";
import React from "react";
import "./movieDetails.css";
import Summary from "../../Summary/Summary";
import Scoreboard from "../Scoreboard/Scoreboard";
import cloud_error from "../../../assets/cloud-error.png";
import {Link} from "react-router-dom";

const MovieDetails = ({movieDetails}) => {
    let bgi = {
        backgroundImage: `url('${movieDetails.imgurl}')`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
    };
    return (
        <div>
            <div className="movie-detail-box" style={bgi}>
                <div>
                    <h4 className="movie-name">{movieDetails.name}</h4>
                </div>
                <div className="movie-detail-body">
                    <div className="movie-cover">
                        <img src={movieDetails.imgurl || cloud_error} alt=""/>
                    </div>
                    <div className="movie-info">
                        <MovieInfo movieDetails={movieDetails}/>
                    </div>
                    <div className="scoreboard">
                        <Scoreboard grade={movieDetails.grade}/>
                        <div style={{marginLeft: "10px"}}>
                            <button className="btn btn-outline-primary  mr-2 my-sm-0">
                                <Link to={`/new_review/${movieDetails.id}`}>写影评</Link>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="summary">
                    <h6>{movieDetails.name}的简介 . . . . .</h6>
                    <Summary isShowMore={true} summary={movieDetails.introduction}/>
                </div>
            </div>
        </div>
    );

};
export default MovieDetails;