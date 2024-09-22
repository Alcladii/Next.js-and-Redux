'use client'
import { createSlice } from '@reduxjs/toolkit';

interface loadCoinsPageState {
    loadCoinsPage: boolean;
}

const initialState: loadCoinsPageState = {
    loadCoinsPage: false,
}

const toggleCoinsSlice = createSlice({
    name: 'toggleCoins',
    initialState,
    reducers: {
        setLoadCoinsPage: (state, action) => {
            state.loadCoinsPage = action.payload
        }
    },
})

export const {setLoadCoinsPage} = toggleCoinsSlice.actions;

export default toggleCoinsSlice.reducer