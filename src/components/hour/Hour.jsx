import React, { useState, useEffect } from 'react';
import Event from '../event/Event';
import PropTypes from 'prop-types';

const Hour = ({ dataHour, hourEvents, removeEventHandler, redLineCurrentDay }) => {
  const [minutes, setMinutes] = useState(new Date().getMinutes());
  const [hour, setHour] = useState(new Date().getHours());

  useEffect(() => {
    if (minutes === 60) {
      setMinutes(0);
      setHour(hour + 1);
    }
    const interval = setInterval(() => {
      setMinutes(minutes + 1);
    }, 60000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="calendar__time-slot" data-time={dataHour + 1}>
      {redLineCurrentDay && dataHour === hour && (
        <div style={{ top: minutes }} className="red-line"></div>
      )}

      {hourEvents.map(({ id, ...hourEvent }) => {
        return <Event key={id} id={id} {...hourEvent} removeEventHandler={removeEventHandler} />;
      })}
    </div>
  );
};

Hour.propTypes = {
  dataHour: PropTypes.number.isRequired,
  hourEvents: PropTypes.array.isRequired,
  removeEventHandler: PropTypes.func.isRequired,
  redLineCurrentDay: PropTypes.bool,
};
export default Hour;
