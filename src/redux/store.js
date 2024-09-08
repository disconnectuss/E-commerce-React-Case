import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // This is for localStorage
import cartReducer from './slices/cartSlice'; // Replace with your actual slice
import productReducer from './slices/productSlice'; // Replace with your actual slice

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'], 
};

const rootReducer = combineReducers({
  cart: cartReducer,
  products: productReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
