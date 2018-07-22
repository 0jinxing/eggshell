import React from "react";
import "./summary.css";
const Summary = ({summary = "", maxLenght = 100,isShowMore = false}) => {
    summary = summary.substr(0, maxLenght).concat(". . .");
    return (
        <p className="summary">
            <span>
                {summary}
            </span>
            <span className="more" hidden={!isShowMore}>(展开)</span>
        </p>
    );
};
export default Summary;