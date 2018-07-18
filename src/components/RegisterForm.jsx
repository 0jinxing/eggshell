import React, { Component } from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

class RegisterForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            submit: false,
            emailValiMsg: '',
            passwordValidMsg: ''
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
        if (!this.state.email) this.setState({ emailValiMsg: 'email不能为空' });
        else if (!this.state.email.match(emailRegex)) this.setState({ emailValiMsg: 'email格式错误' });
        else {
            this.setState({ emailValiMsg: '' });
            valid = true;
        }

        // 密码
        if (!this.state.password) {
            this.setState({ passwordValidMsg: 'password不能为空' });
            valid = false;
        }
        else {
            this.setState({ passwordValidMsg: '' });
            valid = valid && true;
        }

        if (valid) {
            // TODO: 注册相关
        }
    }

    render() {
        return (
            <div id='register-form'>
                <h3 className='mt-4 mb-4 font-weight-light border-bottom p-2'>蛋壳注册</h3>
                <div className='row'>
                    <div className='col-md'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor='email'>邮箱</label>
                                <input className={classnames({
                                    'form-control': true,
                                    'is-invalid': !!this.state.emailValiMsg,
                                })} id='email' name='email' type='text' placeholder='输入您的邮箱' onChange={this.handleChange} />
                                <small className='invalid-feedback'>{this.state.emailValiMsg}</small>
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
                    <div className="col-md">
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