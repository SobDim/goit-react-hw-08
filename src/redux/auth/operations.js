import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, clearToken, setToken } from '../../config/api';

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('/users/signup', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const { data } = await api.post('/users/login', credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await api.post('/users/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (!savedToken) {
      return thunkApi.rejectWithValue('Cant fetch user');
    }
    setToken(savedToken);
    try {
      const { data } = await api.get('/users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
