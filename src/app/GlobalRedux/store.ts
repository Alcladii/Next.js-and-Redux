"use client";

import { configureStore } from "@reduxjs/toolkit";
import coinsReducer from './Features/coins/coinsSlice';
import toggleCoinsReducer from './Features/toggleCoinsPage/toggleCoinsSlice'
import singleCoinReducer from './Features/singleCoin/singleCoinSlice'
import darkModeReducer from './Features/darkMode/darkModeSlice'

export const store = configureStore({
    reducer: {
        coins: coinsReducer,
        toggleCoins: toggleCoinsReducer,
        singleCoin: singleCoinReducer,
        darkMode: darkModeReducer,
    }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;