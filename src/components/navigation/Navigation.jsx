import React from 'react';
import { days } from '../../utils/dateUtils.js';
import moment from 'moment';
import className from 'classnames';
import PropTypes from 'prop-types';

const Navigation = ({ dayDate }) => {
  const isTodayDay =
    moment(dayDate).format('MMMM DD YYYY') == moment(new Date()).format('MMMM DD YYYY');

  return (
    <div
      className={className('calendar__day-label day-label', { 'calendar__today-day': isTodayDay })}
    >
      <span className={'day-label__day-name'}>{days[dayDate.getDay()]}</span>
      <span className={'day-label__day-number'}>{dayDate.getDate()}</span>
    </div>
  );
};

Navigation.propTypes = {
  dayDate: PropTypes.instanceOf(Date).isRequired,
};

export default Navigation;
