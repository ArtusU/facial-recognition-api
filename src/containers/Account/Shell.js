import React from "react";
import { Grid, Container, Segment, Header, Menu } from "semantic-ui-react";
import { logout } from "../../store/actions/auth";


const Shell = props => (
  <Segment vertical>
    <Container>
      <Grid container stackable verticalAlign="top" divided columns={2}>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h3">Account</Header>
            <Menu vertical fluid>
              <Menu.Item
                name="change-email"
              >
                Change Email
              </Menu.Item>
              <Menu.Item
                name="change-email"
              >
                Change Password
              </Menu.Item>
              <Menu.Item
                name="change-email"
              >
                Billing
              </Menu.Item>
              <Menu.Item
                name="change-email"
              >
                API Key
              </Menu.Item>
              <Menu.Item onClick={() => props.logout()} name="change-email">
                Logout
              </Menu.Item>
            </Menu>
          </Grid.Column>
          <Grid.Column width={12}>
            <h1>{props.children}</h1>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
);

export default Shell;