import { connect } from 'react-redux';
import IdentityNavbar from '../components/IdentityNavbar'; 

const mapStateToProps = (state) => {
    let logined = !!state.identity.identity;
    return {
        logined,
        ...state.identity
    };
};

export default connect(mapStateToProps)(IdentityNavbar);
