import React, { useState } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import './common.scss';

const App = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const [statusModalWindow, setStatusModalWindow] = useState(false);

  const weekDates = generateWeekRange(getWeekStartDate(currentWeek));

  const onPrevWeek = () => setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() - 7)));

  const onNextWeek = () => setCurrentWeek(new Date(currentWeek.setDate(currentWeek.getDate() + 7)));

  const onTodayWeek = () => setCurrentWeek(new Date());

  const modalWindow = () => setStatusModalWindow(!statusModalWindow);

  return (
    <>
      <Header
        weekDates={weekDates}
        onNextWeek={onNextWeek}
        onPrevWeek={onPrevWeek}
        onTodayWeek={onTodayWeek}
        setModalWindow={modalWindow}
      />
      <Calendar
        weekDates={weekDates}
        setModalWindow={modalWindow}
        statusModalWindow={statusModalWindow}
      />
    </>
  );
};

export default App;
