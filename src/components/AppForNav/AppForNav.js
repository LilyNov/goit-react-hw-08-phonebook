import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Container,
  Typography,
  Button,
  Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import s from './AppForNav.module.css';
import UserMenu from '../UserMenu/UserMenu';

import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

export default function AppForNav() {
  const classes = useStyles();
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink exact to="/" className={s.link}>
              My Blog
            </NavLink>
          </Typography>
          {isLoggedIn ? (
            <UserMenu />
          ) : (
            <>
              <Box mr={3}>
                <Button color="inherit" variant="outlined">
                  <NavLink exact to="/login" className={s.link}>
                    Log In
                  </NavLink>
                </Button>
              </Box>
              <Button color="secondary" variant="contained">
                <NavLink exact to="/register" className={s.link}>
                  Sign Up
                </NavLink>
              </Button>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
