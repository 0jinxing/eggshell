import {connect} from "react-redux";
import RankingPage from "../components/RankingPage";

const mapStateToProps = (state) => {
    return {
        films: [...state.rankingPage]
    };

};
const mapDispatchToProps = (dispatch) => {
    return {
        dispatch: dispatch
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RankingPage);
