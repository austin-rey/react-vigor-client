import { configureStore } from '@reduxjs/toolkit';

import fitnessLogsReducer from './features/fitness/fitnessLogsSlice';
import fitnessRoutinesReducer from './features/fitness/fitnessRoutinesSlice';
import dietMealsReducer from './features/diet/dietMealsSlice';
import dietLogsReducer from './features/diet/dietLogsSlice';
import goalsReducer from './features/goals/goalsSlice';

const store = configureStore({
  reducer: {
    fitnessLogs: fitnessLogsReducer,
    fitnessRoutines: fitnessRoutinesReducer,
    dietMeals: dietMealsReducer,
    dietLogs: dietLogsReducer,
    goals: goalsReducer,
  },
});

export default store;
