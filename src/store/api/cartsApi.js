import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CARTS_SLICE_NAME } from '../slices/slicesNames';

export const cartsApi = createApi({
  reducerPath: `${CARTS_SLICE_NAME}Api`,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    getAllCarts: build.query({
      query: () => CARTS_SLICE_NAME,
      transformResponse: (response) => response.carts,
      providesTags: ['Carts'],
    }),
  }),
});

export const { useGetAllCartsQuery } = cartsApi;
