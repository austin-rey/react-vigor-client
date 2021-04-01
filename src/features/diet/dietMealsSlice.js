import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import vigor from '../../api/vigor';

const initialState = {
  meals: [],
  filters: {
    sort: '',
    search: '',
    pagination: {},
  },
  status: 'loading',
};

export const fetchMeals = createAsyncThunk('meals/fetchMeals', async () => {
  const response = await vigor.get('/diet/meals/', {});
  return response.data.data;
});

export const updateMeal = createAsyncThunk('meals/updateMeal', async (data) => {
  const response = await vigor.put(`/diet/meals/${data.id}`, {});
  return response.data.data;
});

export const deleteMeal = createAsyncThunk(
  'meals/deleteMeals',
  async (id) => {}
);

export const createMeal = createAsyncThunk('meals/createMeals', async () => {
  const response = await vigor.post('/diet/meals/', {});
  return response.data.data;
});

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchMeals.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(fetchMeals.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateMeal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateMeal.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(updateMeal.rejected, (state, action) => {
        state.status = 'error';
      });

    // DELETE
    builder
      .addCase(deleteMeal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteMeal.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(deleteMeal.rejected, (state, action) => {
        state.status = 'error';
      });

    // CREATE
    builder
      .addCase(createMeal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createMeal.fulfilled, (state, action) => {
        state.status = 'idle';
      })
      .addCase(createMeal.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default mealsSlice.reducer;
