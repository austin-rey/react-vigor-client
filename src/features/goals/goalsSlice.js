import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import vigor from '../../api/vigor';

const initialState = {
  goals: [],
  filters: {
    sort: '',
    search: '',
    pagination: {},
  },
  status: 'loading',
};

export const fetchGoals = createAsyncThunk('goals/fetchGoals', async () => {
  const response = await vigor.get('/goals/', {});
  return response.data.data;
});

export const updateGoal = createAsyncThunk('goals/updateGoal', async (data) => {
  const response = await vigor.put(`/goals/${data.id}`, {
    name: data.name,
    description: data.description,
    time_of_completion: data.timeOfCompletion,
    type: data.type,
    status: data.status,
  });
  return response.data.data;
});

export const deleteGoal = createAsyncThunk('goals/deleteGoals', async (id) => {
  const response = await vigor.delete(`/goals/${id}`, {});
  return id;
});

export const createGoal = createAsyncThunk(
  'goals/createGoals',
  async (data) => {
    const response = await vigor.post('/goals/', {
      name: data.name,
      description: data.description,
      time_of_completion: data.timeOfCompletion,
      type: data.type,
      status: data.status,
    });
    return response.data.data;
  }
);

const goalsSlice = createSlice({
  name: 'goals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchGoals.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchGoals.fulfilled, (state, action) => {
        state.goals = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchGoals.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateGoal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateGoal.fulfilled, (state, action) => {
        state.goals.map((goal, i) => {
          if (goal.id === action.payload.id) {
            state.goals[i] = action.payload;
          }
          return state.goals[i];
        });
        state.status = 'idle';
      })
      .addCase(updateGoal.rejected, (state, action) => {
        state.status = 'error';
      });

    // DELETE
    builder
      .addCase(deleteGoal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteGoal.fulfilled, (state, action) => {
        state.goals.map((goal, i) => {
          if (goal.id === action.payload) {
            delete state.goals[i];
          }
          return state.goals[i];
        });
        state.status = 'idle';
      })
      .addCase(deleteGoal.rejected, (state, action) => {
        state.status = 'error';
      });

    // CREATE
    builder
      .addCase(createGoal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createGoal.fulfilled, (state, action) => {
        state.goals.push(action.payload);
        state.status = 'idle';
      })
      .addCase(createGoal.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default goalsSlice.reducer;
