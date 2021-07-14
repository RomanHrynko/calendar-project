import React from 'react';

import moment from 'moment';
import './header.scss';

const Header = ({ weekDates, prevWeek, nextWeek, todayWeek }) => {
  const currentMonth = moment(weekDates[0]).format('MMMM YYYY');
  const nextMonth = moment(weekDates[weekDates.length - 1]).format('MMMM YYYY');

  const textMonth = currentMonth === nextMonth ? currentMonth : `${currentMonth} - ${nextMonth}`;

  return (
    <header className="header">
      <button className="button create-event-btn">
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={todayWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={prevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={nextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{textMonth}</span>
      </div>
    </header>
  );
};

export default Header;
