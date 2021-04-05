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
    console.log(response.data);
    return response.data.data;
  }
);

export const updateWellnessLog = createAsyncThunk(
  'goals/updateWellnessLog',
  async (log) => {
    console.log('update', log);

    const response = await vigor.put(`/wellness/${log.id}`, {
      wellness_level: log.wellnessLevel,
    });
    return response.data.data;
  }
);

export const deleteWellnessLog = createAsyncThunk(
  'goals/deleteWellnessLogs',
  async (id) => {
    const response = await vigor.delete(`/wellness/${id}`, {});
    return id;
  }
);

export const createWellnessLog = createAsyncThunk(
  'goals/createWellnessLogs',
  async (log) => {
    console.log('create', log);

    const response = await vigor.post('/wellness/', {
      wellness_level: log.wellnessLevel,
    });
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
        state.logs = action.payload;
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
        state.logs.map((log, i) => {
          if (log.id === action.payload.id) {
            state.logs[i] = action.payload;
          }
        });
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
        state.logs.map((log, i) => {
          if (log.id === action.payload) {
            delete state.logs[i];
          }
          return state.logs[i];
        });
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
        state.logs.push(action.payload);
        state.status = 'idle';
      })
      .addCase(createWellnessLog.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default wellnessSlice.reducer;
