import React from 'react';
import { Paper, Grid } from '@material-ui/core';
import { Checks, Dropdown, Text } from '../Fields';
import { Field } from 'react-final-form';

function FullServiceMarketing(props) {
  const Condition = ({ when, is, children }) => (
    <Field name={when} subscription={{ value: true }}>
      {({ input: { value } }) => (value === is ? children : null)}
    </Field>
  );

  return (
    <Paper style={{ padding: 16 }}>
      <Grid container alignItems="flex-start" spacing={8}>
        <Dropdown
          width={6}
          required={true}
          name="numberOfCompetitors"
          label="Number of Competitors"
        />
        <Dropdown
          width={6}
          required={true}
          name="numberOfMarkets"
          label="Number of Markets"
        />
        <Dropdown
          width={12}
          required={true}
          name="analyticsTools"
          label="What Analytics Tool Do They Use?"
        />
        <Condition when="analyticsTools" is="Other">
          <Text
            width={12}
            required={true}
            name="analyticsTools_other"
            placeholder="Name other tool used."
          />
        </Condition>
        <Dropdown
          width={12}
          required={true}
          name="automationTools"
          label="What Automation Tool Do They Use?"
        />
        <Condition when="automationTools" is="Other">
          <Text
            width={12}
            required={true}
            name="automationTools_other"
            placeholder="Name other tool used."
          />
        </Condition>
      </Grid>
    </Paper>
  );
}

export default FullServiceMarketing;
