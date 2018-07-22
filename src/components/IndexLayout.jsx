import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import RegisterForm from '../containers/RegisterForm';
import RankingPage from '../containers/RankingPage';
import IdentityNavbar from '../containers/IdentityNavbar';
import PeoplePage from '../containers/PeoplePage';
import Alert from '../containers/Alert';
import Loading from '../containers/Loading';
import NetworkReconnect from "../containers/NetworkReconnect";

class IndexLayout extends Component {
    render() {
        return (
            <div id='index-layout'>
                <IdentityNavbar />
                <div className='container'>
                    <Route path='/identity/login' component={LoginForm} />
                    <Route path='/identity/register' component={RegisterForm} />
                    <Route path='/identity/people' component={PeoplePage} />
                    <Route path='/movie/ranking' component={RankingPage} />
                </div>
                <Loading />
                <Alert />
                <NetworkReconnect/>
                <div className="loader">
                </div>
            </div>
        );
    }
}

export default IndexLayout;