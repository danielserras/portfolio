import { createSlice } from '@reduxjs/toolkit'


export const colorModeSlice = createSlice({
    name: 'colorMode',
    initialState:{
        colorMode: 'light'
    },

    reducers:{
        changeMode: (state) => {
            state.colorMode = state.colorMode === "light" ? "dark" : "light"; 
        },
    },
})

export const {changeMode} = colorModeSlice.actions
export default colorModeSlice.reducer