'use client'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSingleCoin = createAsyncThunk('singleCoin/fetchSingleCoin', async (coinId: string) => {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false&tickers=false&market_data=true&community_data=true&developer_data=false&sparkline=false`);
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
  singleCoinData: Coin[];
}

const singleCoinInitialState : initialState = {
  loading: false,
  error: "",
  singleCoinData: [],
};

const coinsSlice = createSlice({
  name: 'singleCoin',
  initialState: singleCoinInitialState,
  reducers: {}, 
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleCoin.pending, (state) => {
        state.singleCoinData = []
        state.loading = true;
      })
      .addCase(fetchSingleCoin.fulfilled, (state, action) => {
        state.loading = false;
        
        state.singleCoinData = action.payload;
        state.error = "";
      })
      .addCase(fetchSingleCoin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default coinsSlice.reducer;
