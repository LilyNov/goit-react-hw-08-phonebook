import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
  setToken(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unsetToken() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.setToken(data.token);
    return data;
  } catch (error) {
    return error.message;
  }
});

export const logIn = createAsyncThunk('async/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.setToken(data.token);
    return data;
  } catch (error) {
    //error
  }
});

export const logOut = createAsyncThunk('async/logout', async () => {
  try {
    await axios.post('/users/logout');
    token.unsetToken();
  } catch (error) {
    return error.message;
  }
});

export const fetchCurrentUser = createAsyncThunk(
  'async/fetchCurrentUser',
  async (_, thunkAPI) => {
    // console.log(thunkAPI.getState());

    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.setToken(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      // error
    }
  },
);
