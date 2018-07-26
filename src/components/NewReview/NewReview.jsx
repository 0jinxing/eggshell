import React, {Component} from "react";
import RatingEditorStart from "../../containers/RatingEditorStar";
import MovieCard from "./MovieCard/MovieCard";
import {fetchPostNewReview} from "../../actions/newReview";
import {showAlert} from "../../actions/alert";
import {fetchPostScore, fetchCheckScore} from "../../actions/ratingEditorStar";
import "./newReview.css";

class NewReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.location.state,
            ...props.ratingEditorStart,
            title: "",
            startNum: 0,
            comment: "",
            hadScored: false
        };
        this.fetchPostNewReview = (newReviewData) => {
            this.props.dispatch(fetchPostNewReview(newReviewData));
        };
        this.fetchPostScore = (score, movieId) => {
            this.props.dispatch(fetchPostScore(score, movieId));
        };
        this.fetchCheckScore = (movieId) => {
            this.props.dispatch(fetchCheckScore(movieId));
        };
        this.submit = () => {
            let obj = {
                movie_id: this.state.id,
                comment: this.state.comment,
                title: this.state.title
            };
            if (!obj.comment || !obj.title) {
                this.props.dispatch(showAlert("标题或者内容不能为空", 3000, "danger"));
            } else {
                if (window.confirm("取人提交么？")) {
                    if (this.state.startNum <= 0) {
                        this.props.dispatch(showAlert("你还没有评分，或者评分不能为0", 3000, "danger"));
                    } else {
                        this.fetchPostNewReview(obj);
                        this.fetchPostScore(this.state.startNum, this.state.id);
                    }
                }
            }
        };
    }

    componentDidMount() {
        this.fetchCheckScore(this.state.id);
    }

    componentWillReceiveProps(nextProps) {
        let startNum = 0;
        if (nextProps.ratingEditorStart.checkIsScore.data) {
            startNum = nextProps.ratingEditorStart.checkIsScore.data.star;
        }
        this.setState({
            ...nextProps.ratingEditorStart,
            startNum: startNum,
            hadScored: nextProps.ratingEditorStart.code === 1
        });
    }

    render() {
        return (
            <div className="new_review">
                <div className="movie-card"><MovieCard {...this.state}/></div>
                <div className="ratingEditorStart">
                    <RatingEditorStart hadScored={this.state.hadScored} startNum={this.state.startNum}
                                       handelGetStartNum={(startNum => {
                                           this.setState({
                                               startNum: startNum
                                           });
                                       })}
                    /></div>
                <div className="new_review_title">
                    <input placeholder="请输入标题"
                           onChange={e => (this.setState({title: e.target.value}))}/>
                </div>
                <hr/>

                <div className="new_review_comment">
                    <textarea placeholder="输入你的评论..."
                              onChange={e => (this.setState({comment: e.target.value}))}>
                    </textarea>
                    <button onClick={this.submit}>提交
                    </button>
                </div>
            </div>
        );
    }
}

export default NewReview;