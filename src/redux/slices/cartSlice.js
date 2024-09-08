import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // The items in the cart
  },
  reducers: {
    // Add item to the cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item already exists, increase the quantity
        existingItem.quantity += 1;
      } else {
        // If it's a new item, add it with quantity 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },

    // Increment quantity of an item in the cart
    incrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },

    // Decrement quantity or remove the item from the cart if quantity is 1
    decrementQuantity: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);

      if (item) {
        if (item.quantity === 1) {
          // Remove the item from the cart if the quantity is 1
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        } else {
          // Otherwise, decrease the quantity by 1
          item.quantity -= 1;
        }
      }
    },
  },
});

// Export actions to use in components
export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Selector to get the cart state
export const selectCart = (state) => state.cart;

// Export the reducer to be used in the store
export default cartSlice.reducer;
