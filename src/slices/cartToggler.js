import { createSlice } from '@reduxjs/toolkit';

const cartTogglerSlice = createSlice({
    name: 'cartToggler',
    initialState: { isOpen: false },
    reducers: {
        toggleCart: (state) => {
            state.isOpen = !state.isOpen;
        },
    },
});

export const { toggleCart } = cartTogglerSlice.actions;
export default cartTogglerSlice.reducer;