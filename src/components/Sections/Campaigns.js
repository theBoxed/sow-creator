import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { Text, Dropdown, Checks } from '../Fields';
import { Field } from 'react-final-form';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePickerWrapper } from '../Fields';
import { existingResources } from '../../content/discovery';

class Campaigns extends Component {
  render() {
    return (
      <Paper style={{ padding: 16 }}>
        <Grid container alignItems="flex-start" spacing={8}>
          <Dropdown
            width={6}
            required={true}
            name="campaignObjective"
            label="What is their Objective?"
          />
          <Dropdown
            width={6}
            required={true}
            name="campaignLength"
            label="Length of Campaign?"
          />
          <Text
            width={6}
            required={true}
            name="budget"
            placeholder="What's Their Total Budget?"
            label="Total Budget"
          />
          <Text
            width={6}
            required={true}
            name="mediaBudget"
            placeholder="What's Their Media Budget?"
            label="Media Budget"
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid item xs={12}>
              <Field
                name="campaignStartDate"
                component={DatePickerWrapper}
                fullWidth
                margin="normal"
                label="Campaign Start Date"
              />
            </Grid>
          </MuiPickersUtilsProvider>
          <Checks
            formLabel="Existing Resources"
            list={existingResources}
            size={12}
          />
        </Grid>
      </Paper>
    );
  }
}

export default Campaigns;
