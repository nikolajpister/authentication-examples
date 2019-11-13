import React, { Component } from 'react';
import './App.css';
import Routes from './../Routes/Routes';


class App extends Component {

    render() {
        document.title = `JWT Auth Example`;
        return (
            <div className="App">
                <Routes />
            </div>
        )
    }
}

export default App;
