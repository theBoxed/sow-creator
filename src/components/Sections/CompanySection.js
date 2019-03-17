import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import { Text, Dropdown } from '../Fields';

class CompanySection extends Component {
  render() {
    return (
              <Paper style={{ padding: 16 }}>
                <Grid container alignItems="flex-start" spacing={8}>
                  <Text
                    width={6}
                    required={true}
                    name="companyName"
                    placeholder="Company's Name"
                    label="Company Name"
                  />
                  <Text
                    width={6}
                    required={true}
                    name="revenue"
                    placeholder="Estimated Yearly Revenue"
                    label="Est. Yearly Revenue"
                  />
                  <Dropdown
                    width={6}
                    required={true}
                    name="positionInMarket"
                    label="Position in the Market"
                  />
                  <Dropdown
                    width={6}
                    required={true}
                    name="sizeOfMarketingTeam"
                    label="Size of Marketing Team"
                  />
                  <Dropdown
                    width={6}
                    required={true}
                    name="businessType"
                    label="Business Type"
                  />
                  <Dropdown
                    width={6}
                    required={true}
                    name="lookingFor"
                    label="What are they looking for?"
                  />
                </Grid>
              </Paper>
    );
  }
}

export default CompanySection;
