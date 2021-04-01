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

export const fetchDietLogs = createAsyncThunk(
  'dietLogs/fetchDietLogs',
  async () => {
    const response = await vigor.get('/diet/logs/', {
      withCredentials: true,
    });
    return response.data.data;
  }
);

export const updateDietLog = createAsyncThunk(
  'dietLogs/updateDietLog',
  async (data) => {
    const response = await vigor.put(`/diet/logs/${data.id}`, {});
    return response.data.data;
  }
);

export const deleteDietLog = createAsyncThunk(
  'dietLogs/deleteDietLog',
  async (id) => {}
);

export const createDietLog = createAsyncThunk(
  'dietLogs/createDietLog',
  async () => {
    const response = await vigor.post('/diet/logs/', {});
    return response.data.data;
  }
);

const dietLogsSlice = createSlice({
  name: 'dietLogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchDietLogs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchDietLogs.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchDietLogs.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateDietLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateDietLog.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.status = 'idle';
      })
      .addCase(updateDietLog.rejected, (state, action) => {
        state.status = 'error';
      });

    // DELETE
    builder
      .addCase(deleteDietLog.pending, (state, action) => {})
      .addCase(deleteDietLog.fulfilled, (state, action) => {})
      .addCase(deleteDietLog.rejected, (state, action) => {});

    // CREATE
    builder
      .addCase(createDietLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createDietLog.fulfilled, (state, action) => {
        state.logs.push(action.payload);
        state.status = 'idle';
      })
      .addCase(createDietLog.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default dietLogsSlice.reducer;
