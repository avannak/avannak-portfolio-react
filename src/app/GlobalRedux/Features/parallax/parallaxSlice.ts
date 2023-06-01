'use client'

import {createSlice} from '@reduxjs/toolkit'


const initialState = { parallaxIsOn: true };

const parallaxSlice = createSlice({
  name: 'parallax',
  initialState,
  reducers: {
    toggleParallax: (state) => {
      state.parallaxIsOn = !state.parallaxIsOn;
    }
  }
});

export const { toggleParallax } = parallaxSlice.actions;

export default parallaxSlice.reducer