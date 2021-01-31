import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import AppForNav from './components/AppForNav/AppForNav';
import { Container } from '@material-ui/core';
import UserContacts from './components/UserContacts/UserContacts';
import { fetchCurrentUser } from './redux/auth/auth-operations';
// import NotFoundView from './NotFoundView/NotFoundView';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

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
        <Route exact path="/contacts">
          <UserContacts />
        </Route>
      </Switch>
    </Container>
  );
}
