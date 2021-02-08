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
        <h2 className={s.title}>You can see the weather in any city</h2>
        <p className={s.text} style={{ marginBottom: 20 }}>
          {' '}
          or SignUp/LogIn to access the Phonebook
        </p>

        <WeatherPage />
      </Container>
    </React.Fragment>
  );
}
