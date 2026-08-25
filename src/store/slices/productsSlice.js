import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { setError, setStatus } from "../../service/reducerService";
import api from '../../api';

const SLICE_NAME = 'products';

const initialState = {
  products: [],
  status: null,
  error: null,
}

export const getCartsProducts = createAsyncThunk(
  `${SLICE_NAME}/getCartsProducts`,
  async (cartId, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/carts/${cartId}`);
      if (status >= 400) {
        throw new Error('Something went wrong with geting carts products');
      }
      return data.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const getUsersProducts = createAsyncThunk(
  `${SLICE_NAME}/getUsersProducts`,
  async (userId, {rejectWithValue}) => {
    try {
      const {data, status} = await api.get(`/carts/user/${userId}`) 
      if (status >= 400) {
        throw new Error('Something went wrong with geting users products');
      }
      return data.carts[0].products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
)


const cartsSlice = createSlice({
  name: SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCartsProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(getCartsProducts.pending, setStatus);
    builder.addCase(getCartsProducts.rejected, setError);


    builder.addCase(getUsersProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.status = 'fulfilled';
      state.error = null;
    });
    builder.addCase(getUsersProducts.pending, setStatus);
    builder.addCase(getUsersProducts.rejected, setError);

  },
});

export default cartsSlice.reducer;