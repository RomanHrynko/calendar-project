import React from 'react';
import Day from '../day/Day';
import './week.scss';
import PropTypes from 'prop-types';

const Week = ({ weekDates, events, removeEventHandler }) => {
  return (
    <div className="calendar__week">
      {weekDates.map(dayStart => {
        const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);
        const dayEvents = events.filter(
          event => event.dateFrom > dayStart && event.dateTo < dayEnd,
        );

        return (
          <Day
            key={dayStart.getDate()}
            dayStart={dayStart}
            dayEvents={dayEvents}
            removeEventHandler={removeEventHandler}
          />
        );
      })}
    </div>
  );
};

Week.propTypes = {
  weekDates: PropTypes.array.isRequired,
  events: PropTypes.array.isRequired,
  removeEventHandler: PropTypes.func.isRequired,
};

export default Week;
