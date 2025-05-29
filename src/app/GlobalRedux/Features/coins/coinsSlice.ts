'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCoins = createAsyncThunk('coins/fetchCoins', async () => {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd'); // Replace with your actual API endpoint
    const json = await response.json(); 
    return json 
});

type Coin = {
    id: string
    name: string
  }

interface initialState {
  loading: boolean;
  error: string;
  coins: Coin[];
}

const coinsInitialState : initialState = {
  loading: false,
  error: "",
  coins: [],
};

const coinsSlice = createSlice({
  name: 'coins',
  initialState: coinsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCoins.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCoins.fulfilled, (state, action) => {
        state.loading = false;
        state.coins = action.payload;
        state.error = "";
      })
      .addCase(fetchCoins.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default coinsSlice.reducer;
