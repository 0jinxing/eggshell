import { connect } from 'react-redux';
import PeoplePage from '../components/PeoplePage/PeoplePage';
import { fetchUserInfo, modifyUserInfo } from '../actions/user';

const mapStateToProps = (state) => ({
  ...state.user
});

const mapDispatchToProps = (dispatch) => ({
  getUserInfo: () => dispatch(fetchUserInfo()),
  modifyUserInfo: (nickname, introduction, sex, role, createtime, email, imgurl) => dispatch(modifyUserInfo(nickname, introduction, sex, role, createtime, email, imgurl))
});

export default connect(mapStateToProps, mapDispatchToProps)(PeoplePage);