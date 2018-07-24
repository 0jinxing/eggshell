import React,{Component} from "react";
import RatingEditorStart from "./RatingEditorStar/RatingEditorStar";
import MovieCard from "./MovieCard/MovieCard";
import "./newReview.css";
class NewReview extends Component{
    constructor(props){
        super(props);
        console.log(props.match.params.id);
    }
    render(){
        return(
            <div className="new_review">
                <div className="movie-card"><MovieCard/></div>
                <div className="ratingEditorStart"><RatingEditorStart/></div>
                <div className="new_review_title">
                    <input placeholder="请输入标题"/>
                </div>
                <hr/>

                <div className="new_review_comment">
                    <textarea placeholder="输入你的评论...">
                    </textarea>
                </div>
            </div>
        );
    }
}
export default NewReview;