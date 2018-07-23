import React from "react";

const Scoreboard = () => {
    let data = [10, 15, 25, 30, 30];
    return (
        <div className="scoreboard">
            <h6>蛋壳评分</h6>
            <div className="scoreboard-total">
                <div className="scoreboard-total-left">
                    <span className="scoreboard-score">6.6</span>
                </div>
                <div className="scoreboard-total-right">
                    <div className="scoreboard-start"/>
                    <div className="scoreboard-comment">20394人评价</div>
                </div>
            </div>
            <div className="scoreboard-percent">
                <p>
                    <span className="num-start">5星</span>
                    <span className="percent-bar" style={{
                        width: data[4]
                    }
                    }/>
                    <span>{data[4]}%</span>
                </p>
                <p>
                    <span>4星</span>
                    <span className="percent-bar" style={{
                        width: data[3]
                    }}/>
                    <span>{data[3]}%</span>
                </p>
                <p>
                    <span>3星</span>
                    <span className="percent-bar"style={{
                        width: data[2]
                    }}/>
                    <span>{data[2]}%</span>
                </p>
                <p>
                    <span>2星</span>
                    <span className="percent-bar" style={{
                        width: data[1]
                    }}/>
                    <span>{data[1]}%</span>
                </p>
                <p>
                    <span>1星</span>
                    <span className="percent-bar" style={{
                        width: data[0]
                    }}/>
                    <span>{data[0]}%</span>
                </p>
            </div>
        </div>
    );
};
export default Scoreboard;