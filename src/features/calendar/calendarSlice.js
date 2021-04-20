import {
  createSlice,
  createSelector,
  createAsyncThunk,
  createEntityAdapter,
} from '@reduxjs/toolkit';

import vigor from '../../api/vigor';

const initialState = {
  logs: [],
  status: 'idle',
};

export const fetchLogsByMonthYear = createAsyncThunk(
  'calendar/fetchLogsByMonthYear',
  async ({ month, year }) => {
    console.log(year);
    const response = await vigor.get(`/user/calendar/${month}/${year}`);
    return response.data.data;
  }
);

const calendarSlice = createSlice({
  name: 'calendar',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogsByMonthYear.pending, (state, action) => {
        state.status = 'loading';
      })
      .addCase(fetchLogsByMonthYear.fulfilled, (state, action) => {
        state.logs = action.payload;
        state.status = 'idle';
      })
      .addCase(fetchLogsByMonthYear.rejected, (state, action) => {
        state.status = 'error';
      });
  },
});

export default calendarSlice.reducer;
