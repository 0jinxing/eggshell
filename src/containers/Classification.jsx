import { connect } from 'react-redux';
import Classification from '../components/Classification/Classification';
import { fetchMovieForTag, fetchTag } from '../actions/tag';

const mapStateToProps = (state) => ({
  ...state.tag
});

const mapDispatchToProps = (dispatch) => ({
  getMovieForTag: (sort, range, tags, page) => dispatch(fetchMovieForTag(sort, range, tags, page)),
  getTag: () => dispatch(fetchTag())
});

export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(Classification);