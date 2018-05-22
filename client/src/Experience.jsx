import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import './Experience.css';

const Experience  = ({ overall_exp, hvac_exp, refrigeration_exp, mechanical_exp, beta, updateState, handleSubmit }) => {

    const handleChange = name => event => {
        if(isNaN(event.target.value)) return;
        updateState(name, +(event.target.value));
    };

    const elementA = (
        <div className="experience_form">
          <div>
            <TextField name="overall_exp"
                       label="Overall Work Experience"
                       onChange={handleChange('overall_exp')}
                       value={overall_exp}/>
            years
          </div>
          <div>
            <TextField name="hvac_exp"
                       label="HVAC Experience"
                       onChange={handleChange('hvac_exp')}
                       value={hvac_exp}/>
            years
          </div>
          <div>
            <TextField name="refrigeration_exp"
                       label="Refrigeration Experience"
                       onChange={handleChange('refrigeration_exp')}
                       value={refrigeration_exp}/>
            years
          </div>
          <div>
            <TextField name="mechanical_exp"
                       label="Mechanical Experience"
                       onChange={handleChange('mechanical_exp')}
                       value={mechanical_exp}/>
            years
          </div>
        </div>
    );

    const MenuElements = [];

    for(let i = 0; i <= 10; ++i) {
        MenuElements.push(
            <MenuItem value={i} key={i}>
              { i == 10 ? "+10" : i }
            </MenuItem>
        );
   }
    
    const elementB = (
        <div className="experience_form">
          Years Overall Work Experience
          <Select value={overall_exp}
                  onChange={handleChange('overall_exp')}>
            { MenuElements }
          </Select>
          Years HVAC Work Experience
          <Select value={hvac_exp}
                  onChange={handleChange('hvac_exp')}>
            { MenuElements }
          </Select>
          Years Refrigeration Work Experience
          <Select value={refrigeration_exp}
                  onChange={handleChange('refrigeration_exp')}>
            { MenuElements }
          </Select>
          Years Mechanical Work Experience
          <Select value={mechanical_exp}
                  onChange={handleChange('mechanical_exp')}>
            { MenuElements }
          </Select>          
        </div>
    );


    return (
        <div className="experience">
          <Button href="/"
                  variant="raised"
                  color="secondary">
            back
          </Button>
          { beta ? elementB : elementA }
          <Button onClick={handleSubmit}
                  href="/confirmation"
                  variant="raised"
                  color="primary">
            Submit Application
          </Button>
        </div>
    );
};

export default Experience;
