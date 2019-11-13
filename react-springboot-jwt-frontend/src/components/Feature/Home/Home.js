import React, { Component } from 'react';
import './Home.css';
import { connect } from 'react-redux';

class Home extends Component {

render() {
    return (
        <div className="container padding-0">
            <h1 className="display-3">Hello {this.props.username}</h1>
        </div>
    )
}
}

function mapStateToProps(state) {
    return  state.authReducer; 
}

export default connect(mapStateToProps)(Home);

