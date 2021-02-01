import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Avatar, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { getUsername } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';
import { NavLink } from 'react-router-dom';
import s from '../AppForNav/AppForNav.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function LetterAvatars() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const userName = useSelector(getUsername);
  const nameInAvatar = userName[0].toUpperCase();

  return (
    <div className={classes.root}>
      <Avatar>{nameInAvatar}</Avatar>
      <Box mr={90}>
        <Button color="inherit" variant="outlined">
          <NavLink exact to="/contacts" className={s.link}>
            My contacts
          </NavLink>
        </Button>
      </Box>
      <Box>
        <Button
          color="secondary"
          variant="contained"
          onClick={() => dispatch(logOut())}
        >
          Log out
        </Button>
      </Box>
    </div>
  );
}
