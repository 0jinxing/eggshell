import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem, Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import LoginForm from '../containers/LoginForm';
import RegisterForm from './RegisterForm';
import IdentityNavbar from '../containers/IdentityNavbar';

class IndexLayout extends Component {

    render() {
        return (
            <div id='index-layout'>
                <IdentityNavbar />
                <Grid>
                    <Route path='/login' component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                </Grid>
            </div>
        );
    }
}

export default IndexLayout;