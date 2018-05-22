import React, { Component } from 'react';
import ReactGA from 'react-ga';
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
            step: 0,
            email: "",
            firstName: "",
            lastName: "",
            overall_exp: 0,
            hvac_exp: 0,
            refrigeration_exp: 0,
            mechanical_exp: 0,
            beta: Math.random() <= 0.5,
            errors: {
                email: false,
                firstName: false,
                lastName: false
            }
        };
        this.updateState = this.updateState.bind(this);
        this.submit = this.submit.bind(this);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.validateForm = this.validateForm.bind(this);
        ReactGA.initialize('UA-119702686-1');
        ReactGA.event({
            category: 'Mount',
            action: this.state.beta ? 'beta' : 'alpha'
        });
    }

    updateState(key, value) {
        this.setState({
            [key]: value
        }, () => console.log(this.state));
    }

    
    validateForm() {
        this.setState(prev => {
            let newState = prev;
            newState.errors = {
                email: !isValidEmail(this.state.email),
                firstName: !this.state.firstName,
                lastName: !this.state.lastName
            };
            return newState;
        });
    }

    submit() {
        console.log(this.state);
        fetch('/api/applications', {
            body: JSON.stringify({ application: this.state }),
            headers: { 'content-type': 'application/json' },
            method: 'POST' })
            .then((response) => {
                if(response.ok) {
                    this.next();
                    ReactGA.event({
                        category: "Navigation",
                        action: this.state.beta ? 'beta' : 'alpha'
                    });
                } else {
                    this.validateForm();
                    this.setState({
                        step: 0,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    prev() {
        this.setState(prev => {
            let newState = prev;
            newState.step = prev.step > 0 ? prev.step - 1 : 0;
            return newState;
        });
    }

    next() {
        this.setState(prev => {
            let newState = prev;
            newState.step = prev.step + 1;
            return newState;
        });
    }
    
    render() {
        const PageElement = (step => {
            switch(step) {
            case 1:
                return (
                  <Experience overall_exp={this.state.overall_exp}
                              hvac_exp={this.state.hvac_exp}
                              refrigeration_exp={this.state.refrigeration_exp}
                              mechanical_exp={this.state.mechanical_exp}
                              updateState={this.updateState}
                              prev={this.prev}
                              beta={this.state.beta}
                              handleSubmit={this.submit}/>                    
                );
            case 2:
                return (
                    <Confirmation firstName={this.state.firstName}/>
                );
            default:
                return(
                    <Home email={this.state.email}
                          firstName={this.state.firstName}
                          lastName={this.state.lastName}
                          next={this.next}
                          errors={this.state.errors}
                          updateState={this.updateState}/>
                );
            }
        })(this.state.step);
                
      return (
          <div className="root">
            <CssBaseline/>
            <Paper elevation={2} className="App">
                { PageElement }
              </Paper>
          </div>
    );
  }
}

export default App;
