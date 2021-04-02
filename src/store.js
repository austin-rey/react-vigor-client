import { configureStore } from '@reduxjs/toolkit';

import fitnessLogsReducer from './features/fitness/fitnessLogsSlice';
import fitnessRoutinesReducer from './features/fitness/fitnessRoutinesSlice';
import dietMealsReducer from './features/diet/dietMealsSlice';

const store = configureStore({
  reducer: {
    fitnessLogs: fitnessLogsReducer,
    fitnessRoutines: fitnessRoutinesReducer,
    dietMeals: dietMealsReducer,
  },
});

export default store;
