import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import Experience from './Experience';
import Confirmation from './Confirmation';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: null,
            firstName: null,
            lastName: null,
            overall_exp: null,
            hvac_exp: null,
            refrigeration_exp: null,
            mechanical_exp: null
        };
        this.updateState = this.updateState.bind(this);
    }

    updateState(key, value) {
        this.setState({
            [key]: value
        });
    }
    
    render() {
      return (
          <div className="root">
            <CssBaseline/>
            <BrowserRouter>
              <Paper elevation={2} className="App">
                <Route exact={true} path='/' render={() => (
                    <Home email={this.state.email}
                          firstName={this.state.firstName}
                          lastName={this.state.lastName}
                          updateState={this.updateState}/>
                )}/>
              <Route exact={true} path='/experience' render={() => (
                  <Experience overall_exp={this.state.overall_exp}
                              hvac_exp={this.state.hvac_exp}
                              refrigeration_exp={this.state.refrigeration_exp}
                              mechanical_exp={this.state.refrigeration_exp}
                              updateState={this.updateState}/>
              )}/>
              <Route exact={true} path='/confirmation' render={() => (
                  <div className="App">
                    Confirmation
                  </div>
              )}/>
              </Paper>
              </BrowserRouter>
              </div>
    );
  }
}

export default App;
