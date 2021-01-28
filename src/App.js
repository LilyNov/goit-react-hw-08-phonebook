import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './SignIn/SignIn';
import SignUp from './SignUp/SignUp';
import AppForNav from './AppForNav/AppForNav';
import { Container } from '@material-ui/core';
import NotFoundView from './NotFoundView/NotFoundView';

export default function App() {
  return (
    <Container>
      <AppForNav />

      <Switch>
        <Route exact path="/login">
          <SignIn />
        </Route>

        <Route exact path="/register">
          <SignUp />
        </Route>

        {/* <Route>
          <NotFoundView />
        </Route> */}
      </Switch>
    </Container>
  );
}
