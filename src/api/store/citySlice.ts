import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: localStorage.getItem('city') || ''
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('city', action.payload);
    }
  }
})

export const { setCity } = citySlice.actions;

export default citySlice.reducer;