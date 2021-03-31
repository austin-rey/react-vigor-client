import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.output.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { Provider } from 'react-redux';
import store from './store';

import { fetchFitnessLogs } from './features/fitness/fitnessLogsSlice';
import { fetchFitnessRoutines } from './features/fitness/fitnessRoutinesSlice';

store.dispatch(fetchFitnessLogs());
store.dispatch(fetchFitnessRoutines());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
