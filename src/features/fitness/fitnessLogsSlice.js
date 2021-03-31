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

export const fetchFitnessLogs = createAsyncThunk(
  'fitnessLogs/fetchFitnessLogs',
  async () => {
    const response = await vigor.get('/fitness/logs/');
    return response.data.data;
  }
);

export const updateFitnessLog = createAsyncThunk(
  'fitnessLogs/updateFitnessLog',
  async () => {}
);

export const deleteFitnessLog = createAsyncThunk(
  'fitnessLogs/deleteFitnessLog',
  async () => {}
);

export const createFitnessLog = createAsyncThunk(
  'fitnessLogs/createFitnessLog',
  async () => {}
);

const fitnessLogsSlice = createSlice({
  name: 'fitnessLogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchFitnessLogs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchFitnessLogs.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchFitnessLogs.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateFitnessLog.pending, (state, action) => {})
      .addCase(updateFitnessLog.fulfilled, (state, action) => {})
      .addCase(updateFitnessLog.rejected, (state, action) => {});

    // DELETE
    builder
      .addCase(deleteFitnessLog.pending, (state, action) => {})
      .addCase(deleteFitnessLog.fulfilled, (state, action) => {})
      .addCase(deleteFitnessLog.rejected, (state, action) => {});

    // CREATE
    builder
      .addCase(createFitnessLog.pending, (state, action) => {})
      .addCase(createFitnessLog.fulfilled, (state, action) => {})
      .addCase(createFitnessLog.rejected, (state, action) => {});
  },
});

export default fitnessLogsSlice.reducer;

// Create Selectors
// export const selectFitnessLogsById = createSelector(
//   selectFitnessLogs,
//   (fitnessLogs) => logs.map((log) => log.id)
// );
