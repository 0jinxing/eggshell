import React from 'react';
import { connect } from 'react-redux';
import { fetchReview, fetchOppose, fetchSupport } from '../actions/reviewDetail';
import { fetchGetResponse, fetchPostResponse } from '../actions/response';
import ReviewDetail from '../components/ReviewDetail/ReviewDetail';

const mapStateToProps = (state) => ({
  ...state.reviewDetail,
  ...state.response,
  logined: state.identity.logined
});

const mapDispatchToProps = (dispatch) => ({
  getReviewDetail: (id) => {
    dispatch(fetchReview(id));
  },
  doSupport: (id) => {
    dispatch(fetchSupport(id));
  },
  doOppose: (id) => {
    dispatch(fetchOppose(id));
  },
  getResponse: (id, page) => {
    dispatch(fetchGetResponse(id, page));
  },
  addResponse: (id, comment) => {
    dispatch(fetchPostResponse(id, comment));
  }
});

export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(ReviewDetail);