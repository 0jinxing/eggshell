import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loading from '../components/Loading';

const mapStateToProps = (state) => ({
    ...state.loading
});

export default connect(mapStateToProps)(Loading);