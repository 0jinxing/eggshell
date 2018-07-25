import MovieInfo from "../MovieInfo/MovieInfo";
import React from "react";
import "./movieDetails.css";
import Summary from "../../Summary/Summary";
import Scoreboard from "../Scoreboard/Scoreboard";
import cloud_error from "../../../assets/cloud-error.png";
import {Link} from "react-router-dom";
import LoginForm from "../../LoginForm";

const MovieDetails = ({movieDetails, logined}) => {
    let bgi = {
        backgroundImage: `url('${movieDetails.imgurl}')`,
        width: "100%",
        height: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover"
    };
    let gotoLoginPage = false;
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
                                <Link onClick={(e) => {
                                    if (!logined) {
                                        e.preventDefault();

                                        gotoLoginPage = window.confirm("您还没有登录，去登录页？");
                                        if (gotoLoginPage) {
                                            window.location = `/identity/login`;
                                        }
                                    }
                                }} to={
                                    {
                                        pathname: `/new_review/${movieDetails.id}`,
                                        state: {
                                            id: movieDetails.id,
                                            imgurl: movieDetails.imgurl,
                                            name: movieDetails.name,
                                            grade: movieDetails.grade,
                                            commentNum: movieDetails.comment_num,
                                            scriptwriter: movieDetails.scriptwriter
                                        }
                                    }
                                }>写影评</Link>
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