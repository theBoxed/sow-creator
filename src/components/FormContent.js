import React, { Component } from 'react';
import {
  Typography,
  CssBaseline,
} from '@material-ui/core';
import { Form, Field } from 'react-final-form';
import { onSubmit, validate } from '../_utils/formUtils';
import { CompanySection, DiscoveryOptions, Campaigns } from './Sections';

class FormContent extends Component {
  render() {
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
              <CompanySection />
              <Condition when="lookingFor" is="Discovery and Strategy">
                <DiscoveryOptions size={12} />
              </Condition>
              <Condition when="lookingFor" is="Building a Marketing Campaign">
                <DiscoveryOptions size={12} />
                <Campaigns />
              </Condition>

                    
              <pre>{JSON.stringify(values, 0, 2)}<br />
                {/* Company Name: {values.companyName}<br />
                Revenue: {values.revenue}<br />
                Position: {values.positionInMarket || 'TBD'}<br />
                Size: {values.teamSize}<br />
                Type: {values.businessType}<br />
                Looking For: {values.lookingFor}<br />
                estimatedMediaBudget: $ {values.revenue * dependencies.businessTypeInput[values.businessType]}<br />
                Type Media Percent: {dependencies.businessTypeInput[values.businessType]}<br />
                Position Success Markup: {dependencies.positionInMarketInput[values.positionInMarket] || 'TBD'}<br />
                revenue: {values.revenue}<br />
                estimatedMediaBudget: {values.revenue * dependencies.businessTypeInput[values.businessType]} */}
              </pre> 
            </form>
          )}
        />
      </div>
    );
  }
}

export default FormContent;
