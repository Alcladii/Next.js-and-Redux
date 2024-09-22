'use client'
import { createSlice } from '@reduxjs/toolkit';

interface darkModeState {
    darkModeEnabled: boolean;
}

const initialState: darkModeState = {
    darkModeEnabled: false,
}

const darkModeSlice = createSlice({
    name: 'toggleDarkMode',
    initialState,
    reducers: {
        setDarkMode: (state) => {
            state.darkModeEnabled = !state.darkModeEnabled
        }
    },
})

export const {setDarkMode} = darkModeSlice.actions;

export default darkModeSlice.reducer