import React, { Component } from 'react';

import Login from '../Feature/Login/Login';
import Logout from '../Feature/Logout/Logout';
import Home from '../Feature/Home/Home';

import HeadNavbar from '../../elements/Navigation/HeadNavbar';
import { MainNavBar } from '../../elements/Navigation/MainNavbar';
import { Footer } from '../../elements/Footer/Footer';

import { Router, Route, Switch } from "react-router";
import history from '../../utils/history'
import AuthenticationService from '../../services/AuthenticationService/AuthenticationService';
import * as ACTIONS from '../../store/actions/actions';
import { connect } from 'react-redux';

const authenticationService = new AuthenticationService();

class Routes extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <div>
                        <HeadNavbar auth={authenticationService} history={history} />
                        <MainNavBar />
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route path='/Login' render={() => <Login auth={authenticationService} />} />
                            <Route path='/Logout' component={Logout} />
                        </Switch>
                        <Footer />
                    </div>
                </Router>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.authReducer.isAuthenticated
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginSuccess: (username) => dispatch(ACTIONS.loginSuccess(username)),
        loginFailure: () => dispatch(ACTIONS.failure())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
