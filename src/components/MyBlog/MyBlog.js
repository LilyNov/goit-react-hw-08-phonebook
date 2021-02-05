import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import WeatherPage from '../view/WeatherPage/WeatherPage';
import s from './MyBlog.module.css';

export default function MyBlog() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={s.container}>
        <h2 style={{ textAlign: 'center', color: '#582233' }}>
          You can see the weather in any city
        </h2>
        <p> or SignUp/LogIn to access the Phonebook</p>

        <WeatherPage />
      </Container>
    </React.Fragment>
  );
}
