import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class IdentityNavbar extends Component {

    render() {
        let identityEl = this.props.logined && (
            <Nav pullRight>
                <li>
                    <NavLink to='/user'>
                        {this.props.nickname}
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/logout'>
                        退出
                    </NavLink>
                </li>
            </Nav>) || (
            <Nav pullRight>
                <li>
                    <NavLink to='/login'>
                        登陆
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/register'>
                        注册
                    </NavLink>
                </li>
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