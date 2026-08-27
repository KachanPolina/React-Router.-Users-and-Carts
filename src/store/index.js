import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import { usersApi } from './api/usersApi';
import { cartsApi } from './api/cartsApi';
import { productsApi } from './api/productsApi';

export default configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [cartsApi.reducerPath]: cartsApi.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(usersApi.middleware).concat(cartsApi.middleware).concat(productsApi.middleware).concat(logger),
});

