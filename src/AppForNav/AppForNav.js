import React from 'react';
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
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink exact to="/" className={s.link}>
              My Blog
            </NavLink>
          </Typography>
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
        </Toolbar>
      </Container>
    </AppBar>
  );
}
