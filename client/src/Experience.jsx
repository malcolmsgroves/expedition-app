import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const Experience  = ({ overall_exp, hvac_exp, refrigeration_exp, mechanical_exp, beta, updateState}) => {

    const handleChange = name => event => {
        updateState(name, event.target.value);
    };

    const elementA = (
        <div className="element_a">
          <div>
            <TextField name="overall_exp"
                       label="Overall Work Experience"
                       value={overall_exp}/>
            years
          </div>
          <div>
            <TextField name="hvac_exp"
                       label="HVAC Experience"
                       value={hvac_exp}/>
            years
          </div>
          <div>
            <TextField name="refrigeration_exp"
                       label="Refrigeration Experience"
                       value={refrigeration_exp}/>
            years
          </div>
          <div>
            <TextField name="mechanical_exp"
                       label="Mechanical Experience"
                       value={mechanical_exp}/>
            years
          </div>
        </div>
    );

    const MenuElements = [];

    for(let i = 0; i <= 10; ++i) {
        MenuElements.push(
            <MenuItem value={i}>
              { i == 10 ? "+10" : i }
            </MenuItem>
        );
    }
    
    const elementB = (
        <div className="element_b">
          <Select value={overall_exp}
                  onChange={handleChange('overall_exp')}>
            { MenuElements }
          </Select>
          <Select value={overall_exp}
                  onChange={handleChange('hvac_exp')}>
            { MenuElements }
          </Select>
          <Select value={overall_exp}
                  onChange={handleChange('refrigeration_exp')}>
            { MenuElements }
          </Select>
          <Select value={overall_exp}
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
          <Button href="/confirmation"
                  variant="raised"
                  color="primary">
            Submit Application
          </Button>
        </div>
    );
};

export default Experience;
