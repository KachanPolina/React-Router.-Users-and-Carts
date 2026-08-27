import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setError, setStatus } from '../../service/reducerService';
import api from '../../api';
import { USERS_SLICE_NAME } from './slicesNames';


const initialState = {
  users: [],
  status: null,
  error: null,
};

// export const getAllUsers = createAsyncThunk(
//   `${USERS_SLICE_NAME}/getAllUsers`,
//   async (_, { rejectWithValue }) => {
//     try {
//       const {data, status} = await api.get(`/${USERS_SLICE_NAME}`);
//       if (status >= 400) {
//         throw new Error(`Error geting users is ${status}`);
//       }
//       return data.users;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

export const updateUser = createAsyncThunk(
  `${USERS_SLICE_NAME}/updateUser`,
  async (user, {rejectWithValue}) => {
    try {
      const {status, data} = await api.put(`${USERS_SLICE_NAME}/${user.id}`, user);
      if (status >= 400) {
        throw new Error('Something went wrong with updating user');
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)

export const deleteUser = createAsyncThunk(
  `${USERS_SLICE_NAME}/deleteUser`,
  async (id, { rejectWithValue }) => {
    try {
      const { status } = await api.delete(`/${USERS_SLICE_NAME}/${id}`);
      if (status >= 400) {
        throw new Error(`Error update user is ${status}`);
      }
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const usersSlice = createSlice({
  name: USERS_SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    // Success
    // builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
    //   state.users = payload;
    //   state.status = 'fulfilled';
    //   state.error = null;
    // });
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
      state.users = state.users.map((user) => {
        return user.id === payload.id ? payload : user;
      });
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
      state.users = state.users.filter((user) => user.id !== payload);
      state.status = 'fulfilled';
      state.error = null;
    });

    // Panding
    // builder.addCase(getAllUsers.pending, setStatus);
    builder.addCase(updateUser.pending, setStatus);
    builder.addCase(deleteUser.pending, setStatus);

    // Reject
    // builder.addCase(getAllUsers.rejected, setError);
    builder.addCase(updateUser.rejected, setError);
    builder.addCase(deleteUser.rejected, setError);
  },
});

export default usersSlice.reducer;
