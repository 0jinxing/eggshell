import React from 'react';

class IdentityBar extends React.Component {
    render() {
        let el;
        if (this.props.logined) {
            el = (
                <div>
                    <span>{this.props.account}</span>
                    <a href="#">退出</a>
                </div>
            );
        } else {
            el = (
                <div>
                    <a href="#">登陆</a>
                    <a href="#">注册</a>
                </div>
            );
        }
        return el;
    }
}