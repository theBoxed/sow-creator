import React, { Component } from 'react';
import { Select } from 'final-form-material-ui';
import { Grid, MenuItem } from '@material-ui/core';
import { Field } from 'react-final-form';
import {dropdowns} from '../../content/discovery';

function Dropdown(props) {

    return (
      <Grid item xs={props.width}>
        <Field
          fullWidth
          required={props.required}
          name={props.name}
          component={Select}
          type="text"
          label={props.label}
          formControlProps={{ fullWidth: true }}
        >
          {dropdowns[props.name].map(item => {
            return <MenuItem value={item}>{item}</MenuItem>;
          })}
        </Field>
      </Grid>
    );
}

export default Dropdown;
