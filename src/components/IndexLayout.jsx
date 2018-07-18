import React, { Component } from 'react';
import { Navbar, NavDropdown, MenuItem, Nav, NavItem, Grid } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import LoginForm from './LoginForm';

class IndexLayout extends Component {
    render() {
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
                    <Nav pullRight>
                        <LinkContainer to='/321'>
                            <NavItem href="#">
                                登陆
                            </NavItem>
                        </LinkContainer>
                        <NavItem href="#">
                            注册
                        </NavItem>
                    </Nav>
                </Navbar>
                <Grid>
                    <Route path='/321' component={LoginForm} />
                </Grid>
            </div>
        );
    }
}

export default IndexLayout;