import React, {Component} from "react";
import "./ratingEditorStart.css";

class RatingEditorStar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            startNum: props.startNum / 2 || 0,
            hadScored: props.hadScored || false
        };
        this.handelSelected = (e) => {
            if (this.state.hadScored) {
                console.log("已经投过怕票了");
                return;
            }
            let position = e.clientX - e.target.offsetLeft;
            let index = Math.floor(position / 11) + 1;
            this.setState({
                startNum: index
            });
            this.props.handelGetStartNum(index);
        };
        this.getData = () => {
            let arr = ["力荐", "很差", "较差", "还行", "推荐"];
            return arr[(this.state.startNum || 0) % 5];
        };
    }

    render() {
        return (
            <div className="rating-editor-start">
                <span className="title">给个评价吧:</span>
                <span style={{
                    backgroundPosition: `0px ${(this.state.startNum * 22 - 110)}px`
                }}
                      onMouseMove={this.handelSelected} className="start"
                />
                <span className="label">{this.getData()}</span>
            </div>
        );
    }
}

export default RatingEditorStar;
