import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../api/instance';

export const registerUserAsync = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/register', userData);
      return response.data; // Return the response data (e.g., user object)
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle errors and pass error data to the Redux store
    }
  }
);

// Define an asynchronous thunk for user login
export const loginUserAsync = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await api.post('/auth/login', credentials);
      return response.data; // Return the response data (e.g., user object)
    } catch (error) {
      return rejectWithValue(error.response.data); // Handle errors and pass error data to the Redux store
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,
  },
  reducers: {
    // Action to register a user
    registerUserRequest: (state) => {
      state.loading = true;
    },
    registerUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    registerUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Action to log in a user
    loginUserRequest: (state) => {
      state.loading = true;
    },
    loginUserSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.loading = false;
      state.error = null;
    },
    loginUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
