import {connect} from "react-redux";
import NewReview from "../components/NewReview/NewReview";

export default connect(
    state => ({ratingEditorStart: state.ratingEditorStart}),
    dispatch => ({dispatch})
)(NewReview);