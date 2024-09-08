import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { BASE_URL } from "../../constants/api";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async ({ rejectWithValue }) => {
    try {
      const response = await axios.get(`${BASE_URL}/products`);
      console.log(response);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data || "Failed to fetch products");
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    productList: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    resetProductList: (state) => {
      state.productList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.productList = [...state.productList, ...action.payload];
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export const { resetProductList } = productsSlice.actions;

export default productsSlice.reducer;
