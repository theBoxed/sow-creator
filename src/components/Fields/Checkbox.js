import React from 'react';
import {
  FormGroup,
  FormControl,
  FormControlLabel,
  FormLabel
} from '@material-ui/core';
import { Field } from 'react-final-form';
import { Checkbox } from 'final-form-material-ui';



function Checks(props) {
  console.log(props.list);

    return (
        <FormControl component="fieldset">
          <FormLabel component="legend">{props.formLabel}</FormLabel>
        <FormGroup row>
          {props.list.map(option => {
            return (
              <FormControlLabel
                label={option.name}
                control={
                  <Field
                    name={option.value}
                    component={Checkbox}
                    type="checkbox"
                    value={option.value}
                  />
                }
              />
            );
          })}
        </FormGroup>
        </FormControl>
    );
}

export default Checks;
