import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRegister } from '../actions/identity';
import RegisterForm from '../components/RegisterForm';

const mapStateToProps = (state) => {
    return {
        ...state.identity
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        doRegister: (nickname, email, password) => dispatch(fetchRegister(nickname, email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);