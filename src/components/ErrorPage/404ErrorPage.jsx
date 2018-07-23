import React from "react";
import page404ErrorImg from  "../../assets/404ErrorPage.png";
export const Page404 = () => {
    return (
        <div className="main">
            <div>
                <img src={page404ErrorImg}/>
            </div>
            <div>
                <span>页面不小心丢失啦 . . . . .</span>
            </div>
        </div>
    );
};