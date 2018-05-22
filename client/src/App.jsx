import React, { Component } from 'react';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './Home';
import Experience from './Experience';
import Confirmation from './Confirmation';
import { isValidEmail } from './assets';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            firstName: "",
            lastName: "",
            overall_exp: 0,
            hvac_exp: 0,
            refrigeration_exp: 0,
            mechanical_exp: 0
        };
        this.updateState = this.updateState.bind(this);
        this.submit = this.submit.bind(this);
    }

    updateState(key, value) {
        this.setState({
            [key]: value
        });
    }

    
    validateForm() {
        return (
            isValidEmail(this.state.email) &&
                this.state.firstName &&
                this.state.lastName
        );
    }

    submit() {
        console.log(this.state);
        fetch('/api/applications', {
            body: JSON.stringify({ application: this.state }),
            headers: { 'content-type': 'application/json' },
            method: 'POST' })
            .then(() => {
                withRouter(({ history }) => {
                    history.push('/confirmation');
                });
            })
            .catch(() => {
                withRouter(({ history }) => {
                    history.push('/');
                });
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
                              mechanical_exp={this.state.mechanical_exp}
                              updateState={this.updateState}
                              handleSubmit={this.submit}/>
              )}/>
              <Route exact={true} path='/confirmation' render={() => (
                  <Confirmation firstName={this.state.firstName}/>
              )}/>
              </Paper>
              </BrowserRouter>
              </div>
    );
  }
}

export default App;
