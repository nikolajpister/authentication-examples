import React, { Component } from 'react';
import * as ACTIONS from '../../../store/actions/actions';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
        this.props.history.push(`/`);
    }

    render() {
        return (
            <></>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => dispatch(ACTIONS.logout())
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Logout));
