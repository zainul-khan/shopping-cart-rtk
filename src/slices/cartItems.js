// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';


const cartItemSlice = createSlice({
  name: 'cartItems',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const productToAdd = action.payload;
      const existingProduct = state.find(item => item.product.id === productToAdd.id);

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.push({ product: productToAdd, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      const productIdToRemove = action.payload.id;
      // Use filter to create a new array without the item with the specified id
      return state.filter(item => item.product.id !== productIdToRemove);
    },
  },
});

export const { addToCart, removeFromCart } = cartItemSlice.actions;
export default cartItemSlice.reducer;