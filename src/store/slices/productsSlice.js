import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { setError, setStatus } from "../../service/reducerService";
import api from '../../api';
import { USERS_SLICE_NAME } from './slicesNames';
import { CARTS_SLICE_NAME } from './slicesNames';
import { PRODUCTS_SLICE_NAME } from './slicesNames';

const initialState = {
  products: [],
  status: null,
  error: null,
}

export const getCartsProducts = createAsyncThunk(
  `${PRODUCTS_SLICE_NAME}/getCartsProducts`,
  async (cartId, { rejectWithValue }) => {
    try {
      const { data, status } = await api.get(`/${CARTS_SLICE_NAME}/${cartId}`);
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
  `${PRODUCTS_SLICE_NAME}/getUsersProducts`,
  async (userId, {rejectWithValue}) => {
    try {
      const {data, status} = await api.get(`/${CARTS_SLICE_NAME}/${USERS_SLICE_NAME}/${userId}`) 
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
  name: PRODUCTS_SLICE_NAME,
  initialState,
  extraReducers: (builder) => {
    // Success
    builder.addCase(getCartsProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.status = 'fulfilled';
      state.error = null;
    });
     builder.addCase(getUsersProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.status = 'fulfilled';
      state.error = null;
    });

    // Pending
    builder.addCase(getCartsProducts.pending, setStatus);
    builder.addCase(getUsersProducts.pending, setStatus);
    
   // Reject
    builder.addCase(getCartsProducts.rejected, setError);
    builder.addCase(getUsersProducts.rejected, setError);

  },
});

export default cartsSlice.reducer;