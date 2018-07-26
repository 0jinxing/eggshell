import {connect} from "react-redux";
import React from "react";
import RatingEditorStar from "../components/RatingEditorStar/RatingEditorStar";
export default connect(state => ({ratingEditorStart: state.ratingEditorStart}), dispatch => ({dispatch: dispatch}))(RatingEditorStar);