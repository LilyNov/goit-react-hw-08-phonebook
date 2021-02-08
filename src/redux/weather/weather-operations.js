import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const KEY = '3640d3f7d3b3473eb15101105210502';

export const searchWeather = createAsyncThunk(
  'weather',
  async ({ city }, thunkAPI) => {
    try {
      const { data } = await axios.post(
        `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&days=7`,
      );
      console.log(data);
      return data;
    } catch (error) {
      alert(new Error('Not found any city, please change input variant'));
      return thunkAPI.rejectWithValue();
    }
  },
);
