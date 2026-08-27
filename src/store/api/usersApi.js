import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { USERS_SLICE_NAME } from '../slicesNames';

export const usersApi = createApi({
  reducerPath: `${USERS_SLICE_NAME}Api`,
  baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
  endpoints: (build) => ({
    getAllUsers: build.query({
      query: () => 'users',
      transformResponse: (response) => response.users,
      providesTags: ['Users'],
    }),

    deleteUser: build.mutation({
      query: (id) => ({
        url: `users/${id}`,
        method: 'DELETE',
      }),

      async onQueryStarted(id, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          usersApi.util.updateQueryData('getAllUsers', undefined, (users) => {
            return users.filter((user) => user.id !== id);
          }),
        );

        try {
          await queryFulfilled;
        } catch {
          patchResult.undo();
        }
      },
    }),
    
    getCertainUser: build.query({
      query: (id) => `users/${id}`,
      providesTags: ['Users'],
    }),
  }),
});

export const {
  useGetAllUsersQuery,
  useDeleteUserMutation,
  useGetCertainUserQuery
} = usersApi;
