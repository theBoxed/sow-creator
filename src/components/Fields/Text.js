//inputs
// grid size
// field Name
//type
//placeholderText

import React, { Component } from 'react';
import { TextField } from 'final-form-material-ui';
import { Grid } from '@material-ui/core';
import { Field } from 'react-final-form';

class Text extends Component {
  render() {
    return (
      <Grid item xs={this.props.width}>
        <Field
          id={this.props.name}
          label={this.props.label || ''}
          style={{ margin: 8 }}
          placeholder={this.props.placeholder}
          helperText="Full width!"
          fullWidth
          InputLabelProps={{
            shrink: true
          }}
          required={this.props.required}
          name={this.props.name}
          component={TextField}
          type="text"
        />
      </Grid>
    );
  }
}

export default Text;
