import React, {Component} from "react";
import {connect} from "react-redux";
import {clearAllFailInternetRequests} from "../actions/networkReconnect";

class NetworkReconnect extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        window.addEventListener("online", function () {
            this.props.networkReconnect
                .forEach((action) => {
                    this.props.dispatch(action());
                });
            this.props.dispatch(clearAllFailInternetRequests());
        }.bind(this));
        window.addEventListener("offline", function () {
            console.log("OFFLINE");
        }.bind(this));
    }

    render() {
        return (<div/>);
    }
}

export default connect(
    state => ({networkReconnect: state.networkReconnect}),
    dispatch => ({dispatch})
)(NetworkReconnect);