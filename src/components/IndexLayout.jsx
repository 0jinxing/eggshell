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
import MovieDetails from "../containers/MovieDtails";
import ReviewDetail from '../containers/ReviewDetail';
import BastReviewList from '../containers/BastReviewList';
import LastReviewList from '../containers/LastReviewList';


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
                    <Route path='/movie/details/:id' component={MovieDetails} />
                    <Route path='/review/:id' component={ReviewDetail} />
                    <Route path='/review_list' component={BastReviewList} />
                    <Route exact path='/' component={LastReviewList} />
                </div>
                <Loading />
                <Alert />
                <NetworkReconnect />
                <div className="loader">
                </div>
            </div>
        );
    }
}

export default IndexLayout;