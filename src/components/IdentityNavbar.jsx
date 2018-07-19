import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/brand/eggshell.png';

class IdentityNavbar extends Component {

    handleSearch(e) {
        e.preventDefault();
    }

    render() {
        let identityEl = this.props.logined && (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link to={'/identity/user'} className="nav-link" activeClassName="active">
                        {this.props.nickname}
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to={'/identity/logout'} className="nav-link" activeClassName="active">
                        退出
                    </Link>
                </li>
            </ul>) || (
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={'/identity/login'} className="nav-link" activeClassName="active">
                            登陆
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/identity/register' className="nav-link" activeClassName="active">
                            注册
                        </Link>
                    </li>
                </ul>);
        return (
            <nav id="identity-navbar" className="navbar navbar-expand-lg navbar-light bg-light shadow-sm mb-5 bg-white rounded">
                <div className='container'>
                    <Link className="navbar-brand" to='/'>
                        <img src={logo} height="30" className="d-inline-block align-top mr-2" alt="" />
                        蛋壳
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-menu">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div id="navbar-menu" className="collapse navbar-collapse">
                        <form className="form-inline mx-4 d-none d-lg-inline" onSubmit={this.handleSearch}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" />
                            <button className="btn btn-outline-info my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">分类</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/movie/ranking' className="nav-link" activeClassName="active">
                                    排行
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">影评</a>
                            </li>
                        </ul>
                        {identityEl}
                    </div>
                </div>
            </nav>
        );
    }
}

export default IdentityNavbar;