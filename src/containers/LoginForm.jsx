import Reatc, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchLogin } from '../actions/identity';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state) => {
    return {
        ...state.identity,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doLogin: (email, password) => dispatch(fetchLogin(email, password))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);