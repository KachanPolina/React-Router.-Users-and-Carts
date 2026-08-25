import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { setError, setStatus } from '../../service/reducerService';
import api from '../../api';

const SLICE_NAME = 'carts';

const initialState = {
  carts: [],
  status: null,
  error: null,
};

export const getAllCarts = createAsyncThunk(
  `${SLICE_NAME}/getAllCarts`,
  async (_, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${SLICE_NAME}`);
      if (status >= 400) {
        throw new Error('Something went wrong with getting users');
      }
      return data.carts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const cartsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllCarts.fulfilled, (state, { payload }) => {
      state.carts = payload;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(getAllCarts.pending, setStatus);
    builder.addCase(getAllCarts.rejected, setError);

  },
});

export default cartsSlice.reducer;
