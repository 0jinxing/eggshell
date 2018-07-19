import React from 'react';
import { connect } from 'react-redux';
import FixedBottomAlert from '../components/Alert';
import { closeAlert } from '../actions/alert';

const mapStateToProps = (state) => {
    return { ...state.alert };
};

const mapDispatchToProps = (dispatch) => ({
    closeAlert: () => dispatch(closeAlert())
});

export default connect(mapStateToProps, mapDispatchToProps)(FixedBottomAlert);
