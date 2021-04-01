import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import vigor from '../../api/vigor';

const initialState = {
  token: '',
  name: '',
  email: '',
};

export const registerUser = createAsyncThunk('user/createUser', async () => {
  const response = await vigor.get('/resister/', {
    withCredentials: true,
  });
  return response.data.data;
});

export const loginUser = createAsyncThunk(
  'user/updateDietLog',
  async (data) => {
    const response = await vigor.put('login', {});
    return response.data.data;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.status = 'error';
      });

    // CREATE
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default userSlice.reducer;
