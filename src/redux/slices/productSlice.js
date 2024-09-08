import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL } from '../../constants/api'; 

// Async thunk to fetch products with pagination
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (currentPage, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `${BASE_URL}/products`
      );
      console.log(response)
      return response.data; // Assuming the API response contains the product data
    } catch (error) {
      // Pass the error to the reducer for handling
      return rejectWithValue(error.response.data || 'Failed to fetch products');
    }
  }
);

// Products slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    productList: [], // Holds the list of products
    isLoading: false, // Loading state
    error: null, // Error state to track any errors during fetch
  },
  reducers: {
    // Reset product list when needed
    resetProductList: (state) => {
      state.productList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      // Pending state while products are being fetched
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null; // Clear any previous errors when making a new request
      })
      // Handle successful product fetch
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = [...state.productList, ...action.payload]; // Add fetched products to the existing list
        state.isLoading = false;
      })
      // Handle failed product fetch
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Something went wrong'; // Capture the error message
      });
  },
});

// Export actions for use in components
export const { resetProductList } = productsSlice.actions;

// Export the reducer to be used in the store
export default productsSlice.reducer;
