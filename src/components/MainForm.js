import React, { Component } from 'react';
import { TextField, Checkbox, Radio, Select } from 'final-form-material-ui';
import {
  Typography,
  Paper,
  Link,
  Grid,
  Button,
  CssBaseline,
  RadioGroup,
  FormLabel,
  MenuItem,
  FormGroup,
  FormControl,
  FormControlLabel,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { options } from '../content/discovery';
import Analytics from './Sections/Analytics'


class CompanyInfo extends Component {

  render() {
    const onSubmit = async values => {
      const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
      await sleep(300);
      window.alert(JSON.stringify(values, 0, 2));
    };

    const validate = values => {
      const errors = {};
      if (!values.companyName) {
        errors.companyName = 'Required';
      }
      return errors;
    };

    const Error = ({ name }) => (
      <Field name={name} subscription={{ error: true, touched: true }}>
        {({ meta: { error, touched } }) =>
          error && touched ? <span>{error}</span> : null
        }
      </Field>
    );

    const Condition = ({ when, is, children }) => (
      <Field name={when} subscription={{ value: true }}>
        {({ input: { value } }) => (value === is ? children : null)}
      </Field>
    );


    return (
      <div style={{ padding: 16, margin: 'auto', maxWidth: 600 }}>
        <CssBaseline />
        <Typography variant="h4" align="center" component="h1" gutterBottom>
          SoW Generator
        </Typography>
        <Form
          onSubmit={onSubmit}
          initialValues={{ type: 'SOW Generator', date: new Date() }}
          validate={validate}
          render={({ handleSubmit, reset, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit} noValidate>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={8}>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="companyName"
                      component={TextField}
                      type="text"
                      placeholder="Company's Name"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="revenue"
                      component={TextField}
                      type="text"
                      placeholder="Estimated Yearly Revenue"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="positionInMarket"
                      component={Select}
                      type="text"
                      label="Their Position in the Market"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="Leader">Leader</MenuItem>
                      <MenuItem value="Middle">Middle of Pack</MenuItem>
                      <MenuItem value="Bottom">
                        Bottom
                    </MenuItem>
                      <MenuItem value="StartUp">
                        Start-up
                    </MenuItem>
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="teamSize"
                      component={Select}
                      type="text"
                      label="Size of Marketing Team"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="1">1 person</MenuItem>
                      <MenuItem value="2">2 people</MenuItem>
                      <MenuItem value="3">
                        3 people
                    </MenuItem>
                      <MenuItem value="4">
                        4 people
                    </MenuItem>
                      <MenuItem value="5">
                        5-10 people
                    </MenuItem>
                      <MenuItem value="5">
                        10+ people
                    </MenuItem>
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="businessType"
                      component={Select}
                      type="text"
                      label="Business Type"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="b2bServices">B2B Services</MenuItem>
                      <MenuItem value="b2bProduct">B2B Product</MenuItem>
                      <MenuItem value="b2cServices">B2C Services</MenuItem>
                      <MenuItem value="b2cProduct">B2C Product</MenuItem>
                    </Field>
                  </Grid>
                  <Grid item xs={6}>
                    <Field
                      fullWidth
                      required
                      name="lookingFor"
                      component={Select}
                      type="text"
                      label="What are they looking for?"
                      formControlProps={{ fullWidth: true }}
                    >
                      <MenuItem value="discovery">Discovery & Strategy</MenuItem>
                      <MenuItem value="campaign">Building a Marketing Campaign</MenuItem>
                      <MenuItem value="fullService">Full Service Marketing</MenuItem>
                      <MenuItem value="production">Creative Production</MenuItem>
                    </Field>
                  </Grid>
                </Grid>
              </Paper>
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={8}>
                  <Condition when="lookingFor" is="discovery">
                    <Grid item>
                      <FormControl component="fieldset">
                        <FormLabel component="legend">Discovery Options</FormLabel>
                        <FormGroup row>
                          {options.map(option => {
                            return <FormControlLabel
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
                          })}

                        </FormGroup>
                      </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        fullWidth
                        required
                        name="competitors"
                        component={Select}
                        type="text"
                        label="Number of Competitors"
                        formControlProps={{ fullWidth: true }}
                      >
                        <MenuItem value="5">1-5</MenuItem>
                        <MenuItem value="10">6-10</MenuItem>
                        <MenuItem value="20">10+</MenuItem>
                      </Field>
                    </Grid>
                    <Grid item xs={6}>
                      <Field
                        fullWidth
                        required
                        name="markets"
                        component={Select}
                        type="text"
                        label="Number of Markets"
                        formControlProps={{ fullWidth: true }}
                      >
                        <MenuItem value="1">1</MenuItem>
                        <MenuItem value="2">2</MenuItem>
                        <MenuItem value="3">3</MenuItem>
                      </Field>
                    </Grid>
                  </Condition>
                  <Analytics />
                </Grid>
              </Paper>
              <pre>{JSON.stringify(values, 0, 2)}<br />
                Company Name: {values.companyName}<br />
                Revenue: {values.revenue}<br />
                Position: {values.positionInMarket || 'TBD'}<br />
                Size: {values.teamSize}<br />
                Type: {values.businessType}<br />
                Looking For: {values.lookingFor}<br />
                estimatedMediaBudget: $ {values.revenue * dependencies.businessTypeInput[values.businessType]}<br />
                Type Media Percent: {dependencies.businessTypeInput[values.businessType]}<br />
                Position Success Markup: {dependencies.positionInMarketInput[values.positionInMarket] || 'TBD'}<br />
                revenue: {values.revenue}<br />
                estimatedMediaBudget: {values.revenue * dependencies.businessTypeInput[values.businessType]}
              </pre>
            </form>
          )}
        />
      </div>
    )
  }



}

export default CompanyInfo;