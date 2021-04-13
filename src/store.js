import { configureStore } from '@reduxjs/toolkit';
import fitnessLogsReducer from './features/fitness/fitnessLogsSlice';
import fitnessRoutinesReducer from './features/fitness/fitnessRoutinesSlice';
import dietMealsReducer from './features/diet/dietMealsSlice';
import dietLogsReducer from './features/diet/dietLogsSlice';
import goalsReducer from './features/goals/goalsSlice';
import wellnessLogsReducer from './features/wellness/wellnessSlice';
import userReducer from './features/user/userSlice';

const store = configureStore({
  reducer: {
    fitnessLogs: fitnessLogsReducer,
    fitnessRoutines: fitnessRoutinesReducer,
    dietMeals: dietMealsReducer,
    dietLogs: dietLogsReducer,
    goals: goalsReducer,
    wellnessLogs: wellnessLogsReducer,
    user: userReducer,
  },
});

export default store;
