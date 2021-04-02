import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import vigor from '../../api/vigor';

const initialState = {
  routines: [],
  filters: {
    sort: '',
    search: '',
    pagination: {},
  },
  status: 'idle',
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
  async (data) => {
    console.log('Slice', data);
    const response = await vigor.put(`/fitness/workouts/${data.id}`, {
      name: data.name,
      description: data.description,
    });

    return response.data.data;
  }
);

export const createFitnessRoutine = createAsyncThunk(
  'fitnessRoutines/createFitnessRoutine',
  async (workout) => {
    const response = await vigor.post('/fitness/workouts/', {
      name: workout.name,
      description: workout.description,
    });
    return response.data.data;
  }
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
        state.routines = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchFitnessRoutines.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateFitnessRoutine.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateFitnessRoutine.fulfilled, (state, action) => {
        state.routines.map((routine, i) => {
          if (routine.id === action.payload.id) {
            console.log(routine);
            console.log(action.payload);
            state.routines[i] = action.payload;
          }
        });
        state.status = 'idle';
      })
      .addCase(updateFitnessRoutine.rejected, (state, action) => {
        state.status = 'error';
      });

    // CREATE
    builder
      .addCase(createFitnessRoutine.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createFitnessRoutine.fulfilled, (state, action) => {
        state.routines.push(action.payload);
        state.status = 'idle';
      })
      .addCase(createFitnessRoutine.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default fitnessRoutinesSlice.reducer;
