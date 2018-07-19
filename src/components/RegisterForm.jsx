import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            nickname: '',
            submit: false,
            emailValidMsg: '',
            passwordValidMsg: '',
            nicknameValidMsg: ''
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.logined) {
            this.props.history.push('/');
        }
    }

    // 保留表单的状态
    handleChange = (e) => {
        let newState = {
            [e.target.name]: e.target.value
        };
        this.setState(newState);
    }

    // 处理提交
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ submit: true });

        let valid = false;
        // 字段校验
        // 邮箱校验
        let emailRegex = /\S+?@\S+?\.\S+$/;
        if (!this.state.email.trim()) this.setState({ emailValidMsg: 'email不能为空' });
        else if (!this.state.email.match(emailRegex)) this.setState({ emailValidMsg: 'email格式错误' });
        else {
            this.setState({ emailValidMsg: '' });
            valid = true;
        }

        // 密码
        if (!this.state.password) {
            this.setState({ passwordValidMsg: 'password不能为空' });
            valid = false;
        }
        else {
            this.setState({ passwordValidMsg: '' });
        }

        // 用户名
        if (!this.state.nickname) {
            this.setState({ nicknameValidMsg: '用户名不能为空' });
            valid = false;
        }
        else {
            this.setState({ passwordValidMsg: '' });
        }

        if (valid) {
            // TODO: 注册相关
            this.props.doRegister(this.state.nickname, this.state.email, this.state.password);
        }
    }

    render() {
        return (
            <div id='register-form'>
                <h3 className='mt-4 mb-4 font-weight-light border-bottom p-2'>蛋壳注册</h3>
                <div className='row'>
                    <div className='col-md-4 col-sm-12'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nickname">昵称</label>
                                <input name='nickname' id='nickname' className={classnames({
                                    'form-control': true,
                                    'is-invalid': !!this.state.nicknameValidMsg
                                })} type="text" placeholder='输入您的昵称' onChange={this.handleChange} />
                                <small className='invalid-feedback'>{this.state.nicknameValidMsg}</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor='email'>邮箱</label>
                                <input className={classnames({
                                    'form-control': true,
                                    'is-invalid': !!this.state.emailValidMsg,
                                })} id='email' name='email' type='text' placeholder='输入您的邮箱' onChange={this.handleChange} />
                                <small className='invalid-feedback'>{this.state.emailValidMsg}</small>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>密码</label>
                                <input className={classnames({
                                    'form-control': true,
                                    'is-invalid': !!this.state.passwordValidMsg,
                                })} id='password' name='password' type='password' placeholder='输入您的密码' onChange={this.handleChange} />
                                <span className="invalid-feedback">{this.state.passwordValidMsg}</span>
                            </div>
                            <button className="btn btn-info" type="submit">注册</button>
                        </form>
                    </div>
                    <div className="col-md-4 col-sm-12">
                        <div className='mt-4'>
                            <h4>关于蛋壳</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil tempora voluptates ratione, alias quae odit ab! Ea necessitatibus omnis assumenda, recusandae nihil quod nemo nisi nesciunt beatae maiores distinctio natus?</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;