import React, { Component } from 'react';
import classnames from 'classnames';
import './VerificationInput.css';

export default class VerificationInput extends Component {

    constructor(props) {
        super(props);
        this.state = { value: '', valid: true };
    }

    render() {
        return (
            <div className={classnames({
                'verification-input': true,
                'invalid': !this.state.valid
            })}>
                <input className='input' type="text" name={this.props.name} onBlur={this.handleBlur} onChange={this.handleChange} />
                <span className='msg'>{this.props.msg}</span>
            </div>);
    }

    handleChange = (e) => {
        if (!!this.props.onChange) this.props.onChange(e);
        this.setState({ value: e.target.value, valid: this.checkValid() });
    };

    handleBlur = (e) => {
        if (!!this.props.onBlur) this.props.onBlur(e);
        this.setState({ value: e.target.value, valid: this.checkValid() });
    };

    checkValid = () => {
        if (!!this.props.regex) return !!this.state.value.match(this.props.regex);
        return true;
    };
}