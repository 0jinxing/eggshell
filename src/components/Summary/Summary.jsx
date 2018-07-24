import React, {Component} from "react";
import "./summary.css";

class Summary extends Component {
    constructor(props) {
        super(props);
        let summary = (props.summary || "").substr(0, 100).concat(". . .");
        this.state = {
            originSummary: props.summary || "",
            isShowMore: props.isShowMore || true,
            summary,
            isTackUp:true
        };
    }

    componentWillReceiveProps(nextProps) {
        let summary = (nextProps.summary || "").substr(0, 100).concat(". . .");
        this.setState({
            summary: summary || "",
            originSummary: nextProps.summary || ""
        });
    }

    takeUp() {
        this.setState({
            isTackUp:!this.state.isTackUp
        });
    }

    render() {
        return (
            <div className="summary">
                <p hidden={!this.state.isTackUp}>
                    <span>{this.state.summary}</span>
                    <span onClick={e => {
                        this.takeUp();
                    }} className="more" hidden={!this.props.isShowMore}
                    >(展开)</span>
                </p>
                <p hidden={this.state.isTackUp}>
                    <span>{this.state.originSummary}</span>
                    <span onClick={e => {
                        this.takeUp();
                    }} className="more" hidden={!this.props.isShowMore}
                    >(收起)</span>
                </p>
            </div>
        );
    }
}

export default Summary;