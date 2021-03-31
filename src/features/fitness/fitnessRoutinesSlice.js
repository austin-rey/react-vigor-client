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

export const fetchFitnessRoutines = createAsyncThunk(
  'fitnessRoutines/fetchFitnessRoutines',
  async () => {
    const response = await vigor.get('/fitness/workouts/');
    return response.data.data;
  }
);

export const updateFitnessRoutine = createAsyncThunk(
  'fitnessRoutines/updateFitnessRoutine',
  async () => {}
);

export const deleteFitnessRoutine = createAsyncThunk(
  'fitnessRoutines/deleteFitnessRoutine',
  async () => {}
);

export const createFitnessRoutine = createAsyncThunk(
  'fitnessRoutines/createFitnessRoutine',
  async () => {}
);

const fitnessRoutinesSlice = createSlice({
  name: 'fitnessRoutines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchFitnessRoutines.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchFitnessRoutines.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchFitnessRoutines.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateFitnessRoutine.pending, (state, action) => {})
      .addCase(updateFitnessRoutine.fulfilled, (state, action) => {})
      .addCase(updateFitnessRoutine.rejected, (state, action) => {});

    // DELETE
    builder
      .addCase(deleteFitnessRoutine.pending, (state, action) => {})
      .addCase(deleteFitnessRoutine.fulfilled, (state, action) => {})
      .addCase(deleteFitnessRoutine.rejected, (state, action) => {});

    // CREATE
    builder
      .addCase(createFitnessRoutine.pending, (state, action) => {})
      .addCase(createFitnessRoutine.fulfilled, (state, action) => {})
      .addCase(createFitnessRoutine.rejected, (state, action) => {});
  },
});

export default fitnessRoutinesSlice.reducer;

// Create Selectors
// export const selectFitnessRoutinesById = createSelector(
//   selectFitnessRoutines,
//   (fitnessRoutines) => logs.map((log) => log.id)
// );
