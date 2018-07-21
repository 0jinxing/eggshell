import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import RegisterForm from '../containers/RegisterForm';
import RankingPage from '../containers/RankingPage';
import IdentityNavbar from '../containers/IdentityNavbar';
import Alert from '../containers/Alert';
import Loading from '../containers/Loading';

class IndexLayout extends Component {
    render() {
        return (
            <div id='index-layout'>
                <IdentityNavbar />
                <div className='container'>
                    <Route path='/identity/login' component={LoginForm} />
                    <Route path='/identity/register' component={RegisterForm} />
                    <Route path='/movie/ranking' component={RankingPage} />
                </div>
                <Loading />
                <Alert />
                <div className="loader">
                </div>
            </div>
        );
    }
}

export default IndexLayout;