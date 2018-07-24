import { connect } from 'react-redux';
import { fetchBastReview } from '../actions/review';
import ReviewList from '../components/ReviewList/ReviewList';
import { fetchSupport, fetchOppose } from '../actions/reviewDetail';

const mapStateToProps = (state) => ({
  ...state.review
});

const mapDispatchToProps = (dispatch) => ({
  jumpPage: (page) => dispatch(fetchBastReview(page)),
  doSupport: (id) => {
    dispatch(fetchSupport(id));
  },
  doOppose: (id) => {
    dispatch(fetchOppose(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewList);