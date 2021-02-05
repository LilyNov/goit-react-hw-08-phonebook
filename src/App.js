import React, { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsFetchingCurrent } from './redux/auth/auth-selectors';
import AppForNav from './components/AppForNav/AppForNav';
import PrivateRaute from './components/PrivateRaute/PrivateRaute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import Loader from './components/Loader/Loader';

const MyBlog = lazy(() =>
  import('./components/MyBlog/MyBlog' /*webpackChunkName: MyBlog */),
);

const SignUp = lazy(() =>
  import('./components/SignUp/SignUp' /*webpackChunkName: SignUp */),
);
const SignIn = lazy(() =>
  import('./components/SignIn/SignIn' /*webpackChunkName: SignIn */),
);
const UserContacts = lazy(() =>
  import(
    './components/UserContacts/UserContacts' /*webpackChunkName: UserContacts */
  ),
);
const NotFoundView = lazy(() =>
  import(
    './components/NotFoundView/NotFoundView' /*webpackChunkName: NotFoundView */
  ),
);

export default function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isFetchingCurrentUser ? (
    <Loader />
  ) : (
    <Container>
      <AppForNav />
      <Suspense fallback={<></>}>
        <Switch>
          <PublicRoute exact path="/">
            <MyBlog />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted>
            <SignUp />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted redirectTo="/contacts">
            <SignIn />
          </PublicRoute>

          <PrivateRaute exact path="/contacts" redirectTo="/login">
            <UserContacts />
          </PrivateRaute>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}
