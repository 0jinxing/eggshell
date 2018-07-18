import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, PageHeader, Button, InputGroup } from 'react-bootstrap';

class LoginForm extends Component {

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

        // 字段校验
        // 邮箱
        if (!this.state.email) this.setState({ emailValiMsg: 'email不能为空' });
        else if (!this.state.email.match(this.emailRegex)) this.setState({ emailValiMsg: 'email格式错误' });
        else this.setState({ emailValiMsg: '' });

        // 密码
        if (!this.state.password) this.setState({ passwordValidMsg: 'password不能为空' });
        else this.setState({ passwordValidMsg: '' });
    }

    // 主要用于设置email字段填写提示
    handleEmailBlur = () => {
    }

    // 邮箱校验
    emailRegex = /\S+?@\S+?\.\S+$/;
    getEmailValidationState = () => {
        if (!this.state.email && this.state.submit) return 'warning';
        else if (!this.state.email) return null;

        if (!!this.state.email.match(this.emailRegex)) return 'success';
        else return 'error';
    }

    getPasswordValidationState = () => {
        if (!this.state.password && this.state.submit) return 'warning';
    }

    render() {
        return (
            <div>
                <PageHeader>蛋壳登陆</PageHeader>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup validationState={this.getEmailValidationState()}>
                                <ControlLabel>邮箱</ControlLabel>
                                <InputGroup>
                                    <FormControl name='email' type='text' placeholder='输入您的邮箱' onChange={this.handleChange} onBlur={this.handleEmailBlur} />
                                    <InputGroup.Addon>@</InputGroup.Addon>
                                </InputGroup>
                                <HelpBlock>{this.state.emailValiMsg}</HelpBlock>
                            </FormGroup>
                            <FormGroup validationState={this.getPasswordValidationState()}>
                                <ControlLabel>密码</ControlLabel>
                                <FormControl name='password' type='password' placeholder='输入您的密码' onChange={this.handleChange} />
                                <HelpBlock>{this.state.passwordValidMsg}</HelpBlock>
                            </FormGroup>
                            <Button type="submit">Submit</Button>
                        </form>
                    </Col>
                    <Col xsHidden md={1} lg={2} mdOffset={1} lgOffset={2}>
                        <p>还没有蛋壳账号<a href='#'>注册</a></p>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default LoginForm;