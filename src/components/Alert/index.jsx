import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
        if (this.props.duration && this.props.show) setTimeout(this.props.closeAlert, this.props.duration);
        let el = this.props.show && (
            <div id="fixed-bottom-alert" className={`alert alert-${this.props.level} shadow-sm alert-dismissible show mb-0 `} role="alert">
                <strong>{this.props.title}</strong>&nbsp;{this.props.message}
                <button type="button" className="close" aria-label="Close" onClick={this.props.closeAlert}>
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        ) || '';
        return el;
    }
}

export default Alert;