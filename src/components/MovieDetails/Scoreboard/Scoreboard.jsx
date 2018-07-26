import React from "react";
import "./scoreboard.css";

const Scoreboard = ({
                        grade = 0,
                        commentNum = 0,
                        scoreDetail = {
                            one_star: 0,
                            two_star: 0,
                            three_star: 0,
                            four_star: 0,
                            five_star: 0
                        }
                    }) => {
    const counter = (num) => {
        if (commentNum === 0)
            return 0;
        return num / commentNum * 100;
    };
    return (
        <div className="scoreboard">
            <h5>蛋壳评分</h5>
            <div className="scoreboard-total">
                <div className="scoreboard-total-left">
                    <span className="scoreboard-score">{grade}</span>
                </div>
                <div className="scoreboard-total-right">
                    <div className="scoreboard-start" style={{
                        backgroundPosition: `0px ${-(10 - 2 * (Math.round(grade) / 2)) * 11}px`,
                        backgroundRepeat: "none"
                    }}/>
                    <div className="scoreboard-comment">{commentNum}人评价</div>
                </div>
            </div>
            <div className="scoreboard-percent">
                <p>
                    <span className="num-start">5星</span>
                    <span className="percent-bar" style={{
                        width: counter(scoreDetail.five_star) + 3 + "px"
                    }
                    }/>
                    <span>{counter(scoreDetail.five_star)}%</span>
                </p>
                <p>
                    <span>4星</span>
                    <span className="percent-bar" style={{
                        width: counter(scoreDetail.four_star) + 3 + "px"
                    }}/>
                    <span>{counter(scoreDetail.four_star)}%</span>
                </p>
                <p>
                    <span>3星</span>
                    <span className="percent-bar" style={{
                        width: counter(scoreDetail.three_star) + 3 + "px"
                    }}/>
                    <span>{counter(scoreDetail.three_star)}%</span>
                </p>
                <p>
                    <span>2星</span>
                    <span className="percent-bar" style={{
                        width: counter(scoreDetail.two_star) + 3 + "px"
                    }}/>
                    <span>{counter(scoreDetail.two_star)}%</span>
                </p>
                <p>
                    <span>1星</span>
                    <span className="percent-bar" style={{
                        width: counter(scoreDetail.one_star) + 3 + "px"
                    }}/>
                    <span>{counter(scoreDetail.one_star)}%</span>
                </p>
            </div>
        </div>
    );
};
export default Scoreboard;