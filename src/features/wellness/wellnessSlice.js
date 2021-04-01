import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import vigor from '../../api/vigor';

const initialState = {
  logs: [],
  filters: {
    sort: '',
    search: '',
    pagination: {},
  },
  status: 'loading',
};

export const fetchWellnessLogs = createAsyncThunk(
  'goals/fetchWellnessLogs',
  async () => {
    const response = await vigor.get('/wellness/', {});
    return response.data.data;
  }
);

export const updateWellnessLog = createAsyncThunk(
  'goals/updateWellnessLog',
  async (data) => {
    const response = await vigor.put(`/wellness/${data.id}`, {});
    return response.data.data;
  }
);

export const deleteWellnessLog = createAsyncThunk(
  'goals/deleteWellnessLogs',
  async (id) => {}
);

export const createWellnessLog = createAsyncThunk(
  'goals/createWellnessLogs',
  async () => {
    const response = await vigor.post('/wellness/', {});
    return response.data.data;
  }
);

const wellnessSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchWellnessLogs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchWellnessLogs.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(fetchWellnessLogs.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateWellnessLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateWellnessLog.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(updateWellnessLog.rejected, (state, action) => {
        state.status = 'error';
      });

    // DELETE
    builder
      .addCase(deleteWellnessLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteWellnessLog.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(deleteWellnessLog.rejected, (state, action) => {
        state.status = 'error';
      });

    // CREATE
    builder
      .addCase(createWellnessLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createWellnessLog.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(createWellnessLog.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default wellnessSlice.reducer;
