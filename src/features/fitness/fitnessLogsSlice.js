import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import vigor from '../../api/vigor';

const initialState = {
  logs: [],
  report: [],
  status: 'idle',
};

export const fetchFitnessReport = createAsyncThunk(
  'fitnessLogs/fetchFitnessReport',
  async () => {
    const response = await vigor.get('/fitness/report/', {});
    return response.data.data;
  }
);

export const fetchFitnessLogs = createAsyncThunk(
  'fitnessLogs/fetchFitnessLogs',
  async () => {
    const response = await vigor.get('/fitness/logs/', {
      withCredentials: true,
    });
    return response.data.data;
  }
);

export const updateFitnessLog = createAsyncThunk(
  'fitnessLogs/updateFitnessLog',
  async (data) => {
    console.log(data);
    const response = await vigor.put(`/fitness/logs/${data.id}`, {
      name: data.name,
      description: data.description,
      date_of_workout: data.date_of_workout,
      satisfaction: data.satisfaction,
      workout_type: data.routine,
      workout_length: parseInt(data.workoutLength),
    });

    return response.data.data;
  }
);

export const deleteFitnessLog = createAsyncThunk(
  'fitnessLogs/deleteFitnessLog',
  async (logId) => {
    const response = await vigor.delete(`/fitness/logs/${logId}`, {});
    return logId;
  }
);

export const createFitnessLog = createAsyncThunk(
  'fitnessLogs/createFitnessLog',
  async (log) => {
    const response = await vigor.post('/fitness/logs/', {
      name: log.name,
      description: log.description,
      date_of_workout: log.date,
      workout_type: log.routine,
      satisfaction: log.satisfaction,
      workout_length: parseInt(log.workoutLength),
    });
    return response.data.data;
  }
);

const fitnessLogsSlice = createSlice({
  name: 'fitnessLogs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // GET
    builder
      .addCase(fetchFitnessLogs.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchFitnessLogs.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchFitnessLogs.rejected, (state, action) => {
        state.status = 'error';
      });

    builder
      .addCase(fetchFitnessReport.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchFitnessReport.fulfilled, (state, action) => {
        state.report = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchFitnessReport.rejected, (state, action) => {
        state.status = 'error';
      });

    // UPDATE
    builder
      .addCase(updateFitnessLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(updateFitnessLog.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.status = 'idle';
      })
      .addCase(updateFitnessLog.rejected, (state, action) => {
        state.status = 'error';
      });

    // DELETE
    builder
      .addCase(deleteFitnessLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(deleteFitnessLog.fulfilled, (state, action) => {
        state.logs.map((log, i) => {
          if (log.id === action.payload) {
            delete state.logs[i];
          }
        });
        state.status = 'idle';
      })
      .addCase(deleteFitnessLog.rejected, (state, action) => {
        state.status = 'error';
      });

    // CREATE
    builder
      .addCase(createFitnessLog.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(createFitnessLog.fulfilled, (state, action) => {
        console.log(action.payload);
        state.logs.push(action.payload);
        state.status = 'idle';
      })
      .addCase(createFitnessLog.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default fitnessLogsSlice.reducer;
