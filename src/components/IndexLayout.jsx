import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import RegisterForm from '../containers/RegisterForm';
import IdentityNavbar from '../containers/IdentityNavbar';
import Alert from '../containers/Alert';

class IndexLayout extends Component {
    render() {
        return (
            <div id='index-layout'>
                <IdentityNavbar />
                <div className='container'>
                    <Route path='/login' component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                </div>
                <div class="progress w-25">
                    <div className="w-100 progress-bar-animated progress-bar progress-bar-striped bg-info" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <Alert />
            </div>
        );
    }
}

export default IndexLayout;