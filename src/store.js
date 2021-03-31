import { configureStore } from '@reduxjs/toolkit';

import fitnessLogsReducer from './features/fitness/fitnessLogsSlice';
import fitnessRoutinesReducer from './features/fitness/fitnessRoutinesSlice';

const store = configureStore({
  reducer: {
    fitnessLogs: fitnessLogsReducer,
    fitnessRoutines: fitnessRoutinesReducer,
  },
});

export default store;
