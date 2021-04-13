import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import store from './store';
import { useSelector, useDispatch } from 'react-redux';
import Routes from './components/route/Routes';

import {
  fetchFitnessLogs,
  fetchFitnessReport,
} from './features/fitness/fitnessLogsSlice';
import { fetchFitnessRoutines } from './features/fitness/fitnessRoutinesSlice';
import { fetchDietMeals } from './features/diet/dietMealsSlice';
import { fetchDietLogs } from './features/diet/dietLogsSlice';
import { fetchDietReport } from './features/diet/dietLogsSlice';
import { fetchGoals } from './features/goals/goalsSlice';
import { fetchWellnessLogs } from './features/wellness/wellnessSlice';
import { checkAuthentication } from './features/user/userSlice';
const App = () => {
  const dispatch = useDispatch();

  const authenticated = useSelector((state) => state.user.authenticated);

  // Check authentication across sessions stored in local storage
  useEffect(() => {
    dispatch(checkAuthentication());
  }, []);

  store.dispatch(fetchFitnessLogs());
  store.dispatch(fetchFitnessReport());
  store.dispatch(fetchFitnessRoutines());
  store.dispatch(fetchDietMeals());
  store.dispatch(fetchDietLogs());
  store.dispatch(fetchDietReport());
  store.dispatch(fetchGoals());
  store.dispatch(fetchWellnessLogs());

  const routes = authenticated !== null ? <Routes /> : null;

  return <div className="App bg-gray-700">{routes}</div>;
};

export default App;
