import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import usersReducer from './slices/usersSlice';
import cartsReducer from './slices/cartsSlice';
import productsReducer from './slices/productsSlice';
import { usersApi } from './api/usersApi';
import { cartsApi } from './api/cartsApi';
import { productsApi } from './api/productsApi';

export default configureStore({
  reducer: {
    usersList: usersReducer,
    cartsList: cartsReducer,
    productsList: productsReducer,
    [usersApi.reducerPath]: usersApi.reducer,
    [cartsApi.reducerPath]: cartsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware).concat(cartsApi.middleware).concat(productsApi.middleware),
});

