import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem, Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

class IndexLayout extends Component {

    render() {
        let identityEl = this.props.logined && (
            <Nav pullRight>
                <LinkContainer to='/login'>
                    <NavItem href="#">
                        {this.props.nickname}
                    </NavItem>
                </LinkContainer>
                <LinkContainer to='/logout'>
                    <NavItem href="#">
                        退出
                    </NavItem>
                </LinkContainer>
            </Nav>) || (
                <Nav pullRight>
                    <LinkContainer to='/login'>
                        <NavItem href="#">
                            登陆
                 </NavItem>
                    </LinkContainer>
                    <LinkContainer to='/register'>
                        <NavItem href="#">
                            注册
                </NavItem>
                    </LinkContainer>
                </Nav>);

        return (
            <div>
                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">蛋壳</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem href="#">
                            分类
                    </NavItem>
                        <NavItem href="#">
                            排行
                    </NavItem>
                        <NavItem href="#">
                            影评
                    </NavItem>
                    </Nav>
                    {identityEl}
                </Navbar>
                <Grid>
                    <Route path='/login' component={LoginForm} />
                    <Route path='/register' component={RegisterForm} />
                </Grid>
            </div>
        );
    }
}

export default IndexLayout;