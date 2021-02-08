import { createSlice } from '@reduxjs/toolkit';
import { searchWeather } from './weather-operations';

const initialState = {
  weather: [],
  error: '',
  isFetch: false,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  extraReducers: {
    [searchWeather.fulfilled](state, action) {
      state.weather = action.payload;
      state.isFetch = true;
    },
    [searchWeather.pending](state) {
      state.isFetch = false;
    },
    [searchWeather.rejected](state, action) {
      state.error = action.payload;
      state.isFetch = false;
    },
  },
});

export default weatherSlice.reducer;
