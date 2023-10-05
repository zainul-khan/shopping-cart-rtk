import { createSlice } from '@reduxjs/toolkit';


const utilsSlice = createSlice({
    name: 'utils',
    initialState: {
        loading: false,
        error: ''
    },
    reducers: {
        requestSent: (state, action) => {
            state.loading = true
        },
        responseRecieved: (state, action) => {
            state.loading = false
        },
        recievedError: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {requestSent, responseRecieved, recievedError} = utilsSlice.actions;

export default utilsSlice.reducer;