import React from 'react';
import './sidebar.scss';
import { formatMins } from '../../../src/utils/dateUtils.js';
import PropTypes from 'prop-types';

const Sidebar = ({ hour }) => {
  const newHour = formatMins(hour);

  return (
    <div className="time-slot">
      <span className="time-slot__time">{`${newHour}:00`}</span>
    </div>
  );
};

Sidebar.propTypes = {
  hour: PropTypes.number.isRequired,
};

export default Sidebar;
