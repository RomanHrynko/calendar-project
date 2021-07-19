import React from 'react';
import moment from 'moment';
import './header.scss';
import PropTypes from 'prop-types';

const Header = ({ onNextWeek, onPrevWeek, onTodayWeek, weekDates, handleModalWindow }) => {
  const firstDayWeekOfMonth = moment(weekDates[0]).format('MMMM YYYY');
  const lastDayWeekOfMonth = moment(weekDates[weekDates.length - 1]).format('MMMM YYYY');

  const textMonth =
    firstDayWeekOfMonth === lastDayWeekOfMonth
      ? firstDayWeekOfMonth
      : `${firstDayWeekOfMonth} - ${lastDayWeekOfMonth}`;

  return (
    <header className="header">
      <button className="button create-event-btn" onClick={handleModalWindow}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={onTodayWeek}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={onPrevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={onNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{textMonth}</span>
      </div>
    </header>
  );
};

Header.propTypes = {
  onNextWeek: PropTypes.func.isRequired,
  onPrevWeek: PropTypes.func.isRequired,
  onTodayWeek: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  handleModalWindow: PropTypes.func.isRequired,
};

export default Header;
