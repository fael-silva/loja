import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './ducks/cart';

export default configureStore({
  reducer: {
    cart: cartReducer,
  },
});