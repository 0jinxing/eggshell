import { connect } from 'react-redux';
import IdentityNavbar from '../components/IdentityNavbar';
import { fetchLogout, fetchUserInfo } from '../actions/identity';

const mapStateToProps = (state) => ({
    ...state.identity
});

const mapDispatchToProps = (dispatch) => ({
    doLogout: () => dispatch(fetchLogout()),
    getUserInfo: () => dispatch(fetchUserInfo())
});

export default connect(mapStateToProps, mapDispatchToProps, undefined, { pure: false })(IdentityNavbar);
