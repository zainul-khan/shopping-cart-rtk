import { configureStore } from "@reduxjs/toolkit";
import cartItemReducer from '../slices/cartItems';
import cartTogglerReducer from '../slices/cartToggler';
import utilsSliceReducer from '../slices/utils';

export const store = configureStore({
    reducer:{
        cart: cartItemReducer,
        cartToggle: cartTogglerReducer,
        utils: utilsSliceReducer,
    }
});

export default store;