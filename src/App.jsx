import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';

import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';

import './common.scss';

const App = () => {
  const [weekStartDate, setWeekStartDate] = useState(new Date());

  const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

  const onPrevWeek = () =>
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() - 7)));

  const onNextWeek = () =>
    setWeekStartDate(new Date(weekStartDate.setDate(weekStartDate.getDate() + 7)));

  const onTodayWeek = () => setWeekStartDate(new Date());

  return (
    <>
      <Header
        prevWeek={onPrevWeek}
        nextWeek={onNextWeek}
        todayWeek={onTodayWeek}
        weekDates={weekDates}
      />
      <Calendar weekDates={weekDates} />
    </>
  );
};

export default App;
