import React from 'react';
import { connect } from 'react-redux';
import { fetchReview, fetchOppose, fetchSupport } from '../actions/review';
import ReviewDetail from '../components/ReviewDetail/ReviewDetail';

const mapStateToProps = (state) => ({
  ...state.reviewDetail
});

const mapDispatchToProps = (dispatch) => ({
  getReviewDetail: (id) => {
    dispatch(fetchReview(id));
  },
  doSupport: (id) => {
    dispatch(fetchSupport(id));
  },
  doOppose: (id) => {
    dispatch(fetchSupport(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetail);