import { connect } from 'react-redux';
import { fetchLastReview, fetchSupport, fetchOppose } from '../actions/review';
import ReviewList from '../components/ReviewList/ReviewList';

const mapStateToProps = (state) => ({
  ...state.review
});

const mapDispatchToProps = (dispatch) => ({
  jumpPage: (page) => dispatch(fetchLastReview(page)),
  doSupport: (id) => {
    dispatch(fetchSupport(id));
  },
  doOppose: (id) => {
    dispatch(fetchOppose(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(ReviewList);