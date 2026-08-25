import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import usersReducer from './slices/usersSlice';
import cartsReducer from './slices/cartsSlice';
import productsReducer from './slices/productsSlice';


export default configureStore({
  reducer: {
    usersList: usersReducer,
    cartsList: cartsReducer,
    productsList: productsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})