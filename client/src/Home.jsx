import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FacebookLogin from 'react-facebook-login';
import './Home.css';

const Home = ({ email, firstName, lastName, updateState, next, errors }) => {

    const handleChange = name => event => {
        updateState(name, event.target.value);
    };

    const handleFacebook = (response) => {
        const fullName = response.name;
        const splitName = fullName.split(" ");
        const firstName = splitName[0];
        const lastName = splitName[splitName.length - 1];
        const email = response.email;
        if(email) updateState('email', email);
        if(firstName) updateState('firstName', firstName);
        if(lastName) updateState('lastName', lastName);
    };

    return (
        <div>
          <h1> HVAC Tech </h1>
          <p> We are looking for reliable, professional, motivated and hard working people. Candidates must be looking for a career with a stable HVACR company. We are a family oriented business providing HVAC and Refrigeration services since 1975. We install and service all types of heating, refrigeration and air conditioning equipment. </p>
          <h3> Qualifications </h3>
          <ul>
            <li> Motivated individual </li>
            <li> Must be well groomed and have a neat appearance </li>
            <li> Friendly and personable </li>
            <li> Valid drivers license & a clean driving record </li>
            <li> Must agree to a background check and drug test </li>
            <li> If an apprentice, must be enrolled in school to forward your career </li>
          </ul>
          <h3> Benefits Available </h3>
          <ul>
            <li> Competitive wages </li>
            <li> Paid vacations and 9 holidays </li>
            <li> Medical, dental benefits </li>
            <li> Short Term/Long Term Disability and others available </li>
            <li> 401(k) Plan with available company match </li>
            <li> Great working environment </li>
          </ul>
          <h3> Key Experience </h3>
          <ul>
            <li> HVAC </li>
            <li> Mechanical </li>
            <li> Overall years of work experience </li>
          </ul>
          
          <h2> Apply </h2>
          <FacebookLogin
            appId="1044018745753728"
            autoLoad={true}
            fields="name,email"
            callback={handleFacebook}
            textButton="Autofill with Facebook"/>
          
          <div className="apply">
            <div>
              <TextField value={email}
                         placeholder="email"
                         error={errors.email}
                         onChange={handleChange('email')}/>
            </div>
            <div>
              <TextField value={firstName}
                         placeholder="First Name"
                         error={errors.firstName}
                         onChange={handleChange('firstName')}/>
            </div>
            <div>
              <TextField value={lastName}
                         placeholder="Last Name"
                         error={errors.lastName}
                         onChange={handleChange('lastName')}/>
            </div>
          </div>
          <Button onClick={next}
                  variant="raised"
                  color="primary">
            Next
          </Button>
        </div>
    );
};



export default Home;
