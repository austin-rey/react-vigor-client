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
  status: 'idle',
};

export const fetchDietMeals = createAsyncThunk(
  'meals/fetchDietMeals',
  async () => {
    const response = await vigor.get('/diet/meals/', {});
    return response.data.data;
  }
);

export const updateDietMeal = createAsyncThunk(
  'meals/updateDietMeal',
  async (data) => {
    const response = await vigor.put(`/diet/meals/${data.mealId}`, {
      name: data.name,
      description: data.description,
      calories: data.calories,
      type: data.type,
    });
    return response.data.data;
  }
);

export const createDietMeal = createAsyncThunk(
  'meals/createDietMeals',
  async (data) => {
    const response = await vigor.post('/diet/meals/', {
      name: data.name,
      description: data.description,
      type: data.type,
      calories: data.calories,
    });
    return response.data.data;
  }
);

const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchDietMeals.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchDietMeals.fulfilled, (state, action) => {
        console.log(action.payload);
        state.meals = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchDietMeals.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateDietMeal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateDietMeal.fulfilled, (state, action) => {
        state.meals.map((meal, i) => {
          if (meal.id === action.payload.id) {
            state.meals[i] = action.payload;
          }
        });
        state.status = 'idle';
      })
      .addCase(updateDietMeal.rejected, (state, action) => {
        state.status = 'error';
      });

    // CREATE
    builder
      .addCase(createDietMeal.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createDietMeal.fulfilled, (state, action) => {
        state.meals.push(action.payload);
        state.status = 'idle';
      })
      .addCase(createDietMeal.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default mealsSlice.reducer;
