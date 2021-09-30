import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import {
  InfoCard,
  Header,
  Page,
  Content,
  ContentHeader,
  HeaderLabel,
  SupportButton,
} from '@backstage/core-components';
import { ExampleFetchComponent } from '../ExampleFetchComponent';

import { identityApiRef, useApi } from '@backstage/core-plugin-api';

export const ExampleComponent = () => {
  // our API hook
  const identityApi = useApi(identityApiRef);

  // data to use
  const userId = identityApi.getUserId();
  const profile = identityApi.getProfile();

  return (
    <Page themeId="tool">
      <Header title="Welcome to POC plugin!" subtitle="Optional subtitle">
        <HeaderLabel label="Owner" value="Team X" />
        <HeaderLabel label="Lifecycle" value="Alpha" />
      </Header>
      <Content>
        <ContentHeader title="Data Analytics to follow...">
          <SupportButton>Anglo POC Plugin</SupportButton>
        </ContentHeader>
        <Grid container spacing={3} direction="column">
          <Grid item>
            <InfoCard title="Information card">
              <Typography variant="body1">
                This page is an example backstage plugin, next step is to wire
                it up with meaningful ANGLO data... You are currently logged in
                as {userId}, {profile.email}
              </Typography>
            </InfoCard>
          </Grid>
          <Grid item>
            <ExampleFetchComponent />
          </Grid>
        </Grid>
      </Content>
    </Page>
  );
};
