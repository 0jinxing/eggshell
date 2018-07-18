import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import RegisterForm from './RegisterForm';
import IdentityNavbar from '../containers/IdentityNavbar';

class IndexLayout extends Component {

    render() {
        return (
            <div id='index-layout'>
                <IdentityNavbar />
                <div className='container'>
                    <Route path='/login' component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                </div>
            </div>
        );
    }
}

export default IndexLayout;