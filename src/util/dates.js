export const isToday = (someDate) => {
  const newDate = new Date(someDate);
  const today = new Date();
  return (
    newDate.getDate() == today.getDate() &&
    newDate.getMonth() == today.getMonth() &&
    newDate.getFullYear() == today.getFullYear()
  );
};

export const getMonthDay = (someDate) => {
  const newDate = new Date(someDate);
  return (
    ('0' + (newDate.getMonth() + 1)).slice(-2) +
    ' / ' +
    ('0' + newDate.getDate()).slice(-2)
  );
};

export const getDayName = (date) => {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  return days[new Date(date).getDay()];
};
