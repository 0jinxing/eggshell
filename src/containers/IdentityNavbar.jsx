import { connect } from 'react-redux';
import IdentityNavbar from '../components/IdentityNavbar'; 

const mapStateToProps = (state) => {
    return {
        ...state.identity
    };
};

export default connect(mapStateToProps)(IdentityNavbar);
