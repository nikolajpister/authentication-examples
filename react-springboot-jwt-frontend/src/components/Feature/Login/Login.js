import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import "./Login.css";
import { connect } from 'react-redux';
import * as ACTIONS from './../../../store/actions/actions';
import { withRouter } from 'react-router';
import { ToastService } from './../../../services/ToastService/ToastService';



class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = event => {
        const { username, password } = this.state;
        const { auth, history } = this.props;
        event.preventDefault();

        auth.authenticate(username, password).then(res => {
            //auth.registerSuccessfulLoginForJwt(username, res.data.access_token);
            this.props.loginSuccessed(username, res.data.access_token);
            history.push(`/`);
        }).catch(error => {
            ToastService.showToast(error);
            this.props.loginFailed();
        });

    }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <ControlLabel>Username</ControlLabel>
                        <FormControl
                            autoFocus
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                        />
                    </FormGroup>
                    <Button
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Login
                    </Button>
                </form>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return  state.authReducer; 
}

function mapDispatchToProps(dispatch) {
    return {
        loginSuccessed: (username, token) => dispatch(ACTIONS.loginSuccess(username, token)),
        loginFailed: () => dispatch(ACTIONS.failure())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
