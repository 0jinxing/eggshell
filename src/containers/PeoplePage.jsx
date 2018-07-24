import { connect } from 'react-redux';
import PeoplePage from '../components/PeoplePage/PeoplePage';
import { fetchUserInfo, modifyUserInfo } from '../actions/user';
import { fetchUserInfo as modifyNavbarUserInfo } from '../actions/identity';

const mapStateToProps = (state) => ({
  ...state.user,
  logined: state.identity.logined
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(fetchUserInfo()),
  modifyUserInfo: (nickname, introduction, sex, role, createtime, email, imgurl) => {
    dispatch(modifyUserInfo(nickname, introduction, sex, role, createtime, email, imgurl));
    dispatch(modifyNavbarUserInfo());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);