import { connect } from 'react-redux';
import SearchPage from '../components/SearchPage/SearchPage';
import { fetchSearch } from '../actions/search';

const mapStateToProps = (state) => ({
  ...state.search
});

const mapDispatchToProps = (dispatch) => ({
  doSearch: (kw, page) => {
    dispatch(fetchSearch(kw, page));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);