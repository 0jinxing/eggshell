import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class IdentityNavbar extends Component {

    render() {
        let identityEl = this.props.logined && (
            <Nav pullRight>
                <LinkContainer to='/user'>
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
            <Navbar inverse collapseOnSelect id='identity-navbar'>
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
        );
    }

}

export default IdentityNavbar;