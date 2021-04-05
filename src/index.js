import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import * as Cookies from 'js-cookie';

import Modal from 'react-modal';

import { Provider } from 'react-redux';
import store from './store';

import { fetchFitnessLogs } from './features/fitness/fitnessLogsSlice';
import { fetchFitnessRoutines } from './features/fitness/fitnessRoutinesSlice';
import { fetchDietMeals } from './features/diet/dietMealsSlice';
import { fetchDietLogs } from './features/diet/dietLogsSlice';
import { fetchGoals } from './features/goals/goalsSlice';
import { fetchWellnessLogs } from './features/wellness/wellnessSlice';

Modal.setAppElement(document.getElementById('root'));

store.dispatch(fetchFitnessLogs());
store.dispatch(fetchFitnessRoutines());
store.dispatch(fetchDietMeals());
store.dispatch(fetchDietLogs());
store.dispatch(fetchGoals());
store.dispatch(fetchWellnessLogs());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
