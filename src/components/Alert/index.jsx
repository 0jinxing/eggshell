import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QueueAnim from 'rc-queue-anim';
import './Alert.css';

class Alert extends Component {

    static propTypes = {
        title: PropTypes.string,
        message: PropTypes.string,
        duration: PropTypes.number,
        level: PropTypes.string,
        show: PropTypes.bool,
        closeAlert: PropTypes.func
    };

    render() {
        if (this.props.duration) setTimeout(this.props.closeAlert, this.props.duration);
        let el = this.props.show && (
            <div key='alert' className={`alert alert-${this.props.level} shadow-sm alert-dismissible show mb-0 `} role="alert">
                <strong>{this.props.title}</strong>&nbsp;{this.props.message}
                <button type="button" className="close" aria-label="Close" onClick={this.props.closeAlert}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ) || null;
        return (
            <QueueAnim type="right" id="alert">
                {el}
            </QueueAnim>
        );
    }
}

export default Alert;