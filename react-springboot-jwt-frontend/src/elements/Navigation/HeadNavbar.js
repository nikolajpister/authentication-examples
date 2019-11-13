import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HeadNavbar.css';
import { connect } from 'react-redux';

class HeadNavbar extends Component {
    render() {
        const userName = this.props.username;
        const loggedIn = this.props.isAuthenticated && userName !== null ? true : false;

        return (
            <div className="d-flex flex-row-reverse navbar-dark bg-dark pr-3 pt-1">
                {loggedIn ?
                    <Link className="ml-3 naviElement headnaviElement" to='/Logout'>logout</Link>
                    : <Link className="ml-3 naviElement headnaviElement" to='/Login'>login</Link>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state.authReducer;
}

export default connect(mapStateToProps)(HeadNavbar);
