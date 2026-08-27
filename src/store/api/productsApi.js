import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_SLICE_NAME } from '../slicesNames';
import { CARTS_SLICE_NAME } from '../slicesNames';
import { PRODUCTS_SLICE_NAME } from '../slicesNames';

export const productsApi = createApi({
  reducerPath: `${PRODUCTS_SLICE_NAME}Api`,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  tagTypes: ['Products'], 
  endpoints: (build) => ({
    getCartsProducts: build.query({
      query: (cartId) => `/${CARTS_SLICE_NAME}/${cartId}`,
      transformResponse: (response) => response.products,
      providesTags: ['Products'],
    }),
    getUsersProducts: build.query({
      query: (userId) => `/${CARTS_SLICE_NAME}/${USERS_SLICE_NAME}/${userId}`,
      transformResponse: (response) => response.carts[0].products,
      providesTags: ['Products'],
    }),
  }),
});

export const { useGetCartsProductsQuery, useGetUsersProductsQuery } = productsApi;
