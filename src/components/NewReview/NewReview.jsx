import React, {Component} from "react";
import RatingEditorStart from "./RatingEditorStar/RatingEditorStar";
import MovieCard from "./MovieCard/MovieCard";
import {fetchPostNewReview} from "../../actions/newReview";
import {showAlert} from "../../actions/alert";
import "./newReview.css";

class NewReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ...props.location.state,
            title: "",
            startNum: 0,
            comment: ""
        };
        this.fetchPostNewReview = (newReviewData) => {
            this.props.dispatch(fetchPostNewReview(newReviewData));
        };
    }

    render() {
        return (
            <div className="new_review">
                <div className="movie-card"><MovieCard {...this.state}/></div>
                <div className="ratingEditorStart">
                    <RatingEditorStart
                        handelGetStartNum={(startNum => {
                            this.setState({
                                startNum: startNum
                            });
                        })}
                    /></div>
                <div className="new_review_title">
                    <input placeholder="请输入标题"
                           onChange={e => (this.setState({comment: e.target.value}))}/>
                </div>
                <hr/>

                <div className="new_review_comment">
                    <textarea placeholder="输入你的评论..."
                              onChange={e => (this.setState({title: e.target.value}))}>
                    </textarea>
                    <button onClick={() => {
                        let obj = {
                            movie_id:this.state.id,
                            comment:this.state.comment,
                            title:this.state.title
                        };
                        if(!obj.comment||!obj.title){
                            this.props.dispatch(showAlert("标题或者内容不能为空", 3000, "danger"));
                        }else{
                            if(window.confirm("取人提交么？")){
                                this.fetchPostNewReview(obj);
                            }
                        }
                    }}>提交
                    </button>
                </div>
            </div>
        );
    }
}

export default NewReview;