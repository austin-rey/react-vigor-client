import React, { useState } from 'react';
import Button from '../../components/Button';
import PropTypes from 'prop-types';
import { getMonthName, getDayName } from '../../util/dates';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLogsByMonthYear } from './calendarSlice';
import Loading from '../../components/Loading';

const DaySlot = ({ body }) => {
  return (
    <div className="w-full h-36 bg-gray-200 rounded-sm flex items-center justify-center">
      {body && body}
    </div>
  );
};

const DayHeading = (props) => {
  return (
    <h6 className="text-lg font-Lato text-gray-500 pt-2">{props.children}</h6>
  );
};

const CalendarFooter = ({ onChange, currMonth, currYear }) => {
  console.log(currMonth);
  return (
    <div className="flex items-center justify-center p-8">
      <div className="w-32 h-8 mr-2">
        <Button
          body={<p>{currYear - 1}</p>}
          color="yellow"
          onclick={() => onChange(currMonth + 1, currYear - 1)}
        />
      </div>
      <div className="w-32 h-8">
        <Button
          body={<p>{getMonthName(currMonth - 2)}</p>}
          color="green"
          onclick={() => onChange(currMonth - 2, currYear)}
        />
      </div>
      <h6 className="text-lg font-Lato text-gray-500 px-12 border-4 mx-2 rounded-sm">
        {currMonth}/{currYear}
      </h6>
      <div className="w-32 h-8 mr-2">
        <Button
          body={<p>{getMonthName(currMonth + 1)}</p>}
          color="green"
          onclick={() => onChange(currMonth + 1, currYear)}
        />
      </div>
      <div className="w-32 h-8">
        <Button
          body={<p>{currYear + 1}</p>}
          color="yellow"
          onclick={() => onChange(currMonth, currYear + 1)}
        />
      </div>
    </div>
  );
};

CalendarFooter.propTypes = {
  onChange: PropTypes.func,
  currMonth: PropTypes.number,
  currYear: PropTypes.number,
};

const Calendar = () => {
  const dispatch = useDispatch();

  const [currentDateRange, setCurrentDateRange] = useState({
    month: new Date().getMonth() + 1,
    year: new Date().getFullYear(),
  });

  const loadingStatus = useSelector((state) => state.calendar.status);
  const calendarEntries = useSelector((state) => state.calendar.logs[0]);
  const calendarStart = getDayName(
    `${currentDateRange.month}/01/${currentDateRange.year}`
  );
  const calendarSlotTotal = 42;
  const slotItems = [];

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  console.log(calendarEntries);
  const startDayIndex = days.indexOf(calendarStart);

  const RenderedDayHeadings = days.map((day) => {
    return <DayHeading>{day}</DayHeading>;
  });

  // Calendar slots for days in the week
  const SlotBody = ({ day }) => {
    // Find logs by day count
    let totalFitnessLogs = 0;
    const fitnessLogs = calendarEntries.fitness_logs.map((log) => {
      if (new Date(log.created_at).getDate() == day) {
        totalFitnessLogs++;
        return log;
      }
    });

    const wellnessLogs = calendarEntries.wellness_logs.map((log) => {});

    let totalDietLogs = 0;
    const dietLogs = calendarEntries.diet_logs.map((log) => {
      if (new Date(log.created_at).getDate() == day) {
        totalDietLogs++;
        return log;
      }
    });
    return (
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row w-full justify-between">
          <p className="m-1 bg-gray-700 w-8 h-8 rounded-sm flex items-center justify-center text-sm text-white font-Lato">
            {day}
          </p>
          <p className="m-1 bg-gray-400 w-8 h-8 rounded-sm flex items-center justify-center text-sm text-white font-Lato">
            o
          </p>
        </div>
        <div className="flex flex-col w-full p-1">
          <div className="flex">
            {totalFitnessLogs > 0 && `${totalFitnessLogs} Fitness Records`}
          </div>
          <div className="flex">
            {totalDietLogs > 0 && `${totalDietLogs} Diet Records`}
          </div>
        </div>
      </div>
    );
  };

  let dayCount = 1;
  // Creates a list of elements for the calendar component
  for (let i = 0; i < calendarSlotTotal; i++) {
    if (
      i < startDayIndex ||
      i >
        new Date(currentDateRange.year, currentDateRange.month, 0).getDate() +
          startDayIndex -
          1
    ) {
      slotItems.push(<DaySlot />);
    } else {
      slotItems.push(<DaySlot body={<SlotBody day={dayCount} />} />);
      dayCount++;
    }
  }

  // Changes current month/year of calendar, creates action to fetch logs
  const dateChange = (month, year) => {
    console.log(month, year);
    setCurrentDateRange({ month: month, year: year });
    dispatch(fetchLogsByMonthYear({ month: month, year: year }));
  };

  if (loadingStatus === 'loading') {
    return (
      <div className="w-min-content flex flex-grow mb-2">
        <Loading />
      </div>
    );
  }

  return (
    <div className="w-full bg-white mb-12">
      <div className="grid grid-cols-7 gap-4 p-4">{RenderedDayHeadings}</div>
      <div className="w-full bg-white grid grid-cols-7 gap-4 p-4 rounded-sm">
        {slotItems}
      </div>
      <div>
        <CalendarFooter
          currMonth={currentDateRange.month}
          currYear={currentDateRange.year}
          onChange={dateChange}
        />
      </div>
    </div>
  );
};

export default Calendar;
