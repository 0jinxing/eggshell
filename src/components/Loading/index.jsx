import React, { Component } from 'react';
import QueueAnim from 'rc-queue-anim';
import './Loading.css';

class Loading extends Component {
    render() {
        let el = this.props.show && (
            <div>
                <div className="mask"></div>
                <div className='loading'></div>
                <span className="loading-msg">{this.props.message || '加载中'}</span>
            </div>
        ) || null;
        return (
            <QueueAnim type='scale' id="loading">
                {el}
            </QueueAnim>
        );
    }
}

export default Loading;