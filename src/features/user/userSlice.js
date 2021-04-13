import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';
import vigor from '../../api/vigor';

const initialState = {
  name: '',
  email: '',
  authenticated: null,
};

export const registerUser = createAsyncThunk(
  'user/createUser',
  async (data) => {
    console.log(data);
    const response = await vigor.post(
      'user/register/',
      {
        first_name: data.firstName,
        last_name: data.firstName,
        email: data.email,
        password: data.password,
        weight: 200,
        height: 72,
        age: 24,
        user_preferences: 'fitness',
      },
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data;
  }
);

export const loginUser = createAsyncThunk('user/loginUser', async (data) => {
  const response = await vigor.post(
    'user/login/',
    {
      email: data.email,
      password: data.password,
    },
    {
      withCredentials: true,
    }
  );
  return response.data;
});

export const getUser = createAsyncThunk('user/getUser', async (data) => {});

export const logoutUser = createAsyncThunk('user/logoutUser', async (data) => {
  await window.localStorage.setItem('authenticated', false);
  return false;
});

export const checkAuthentication = createAsyncThunk(
  'user/checkAuthentication',
  async () => {
    return await window.localStorage.getItem('authenticated');
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(checkAuthentication.fulfilled, (state, action) => {
      state.authenticated = JSON.parse(action.payload);
    });

    builder.addCase(logoutUser.fulfilled, (state, action) => {
      state.authenticated = action.payload;
    });

    builder
      .addCase(registerUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.authenticated = true;
        window.localStorage.setItem('authenticated', true);
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.authenticated = false;
        window.localStorage.setItem('authenticated', false);
      });
    builder
      .addCase(loginUser.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authenticated = true;
        window.localStorage.setItem('authenticated', true);
        state.name = action.payload.user.name;
        state.email = action.payload.user.email;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authenticated = false;
        window.localStorage.setItem('authenticated', false);
      });
  },
});

export default userSlice.reducer;
