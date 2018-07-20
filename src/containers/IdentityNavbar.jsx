import { connect } from 'react-redux';
import IdentityNavbar from '../components/IdentityNavbar';
import { fetchLogout } from '../actions/identity';

const mapStateToProps = (state) => ({
    ...state.identity
});

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(fetchLogout())
});

export default connect(mapStateToProps, mapDispatchToProps)(IdentityNavbar);
