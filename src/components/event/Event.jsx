import React, { useState } from 'react';
import './event.scss';
import { formatMins } from '../../../src/utils/dateUtils.js';
import PropTypes from 'prop-types';

const Event = ({ id, dateFrom, dateTo, title, removeEventHandler, description }) => {
  const [eventStatus, setEventStatus] = useState(false);

  const eventStart = `${dateFrom.getHours()}:${formatMins(dateFrom.getMinutes())}`;
  const eventEnd = `${dateTo.getHours()}:${formatMins(dateTo.getMinutes())}`;

  const height = (dateTo.getTime() - dateFrom.getTime()) / (1000 * 60);
  const marginTop = dateFrom.getMinutes();

  const eventStyle = {
    height,
    marginTop,
  };

  const styleButton = {
    marginTop: marginTop + height,
  };

  return (
    <>
      <div style={eventStyle} className="event" onClick={() => setEventStatus(!eventStatus)}>
        <div className="event__title">{title}</div>
        <div className="event__time">{`${eventStart} - ${eventEnd}`}</div>
        <div className="event__description">{description}</div>
      </div>
      {eventStatus && (
        <button
          style={styleButton}
          className="delete-event-btn"
          onClick={() => removeEventHandler(id)}
        >
          <i className="fas fa-trash"></i>
          Delete
        </button>
      )}
    </>
  );
};

Event.propTypes = {
  id: PropTypes.string.isRequired,
  dateFrom: PropTypes.instanceOf(Date).isRequired,
  dateTo: PropTypes.instanceOf(Date).isRequired,
  title: PropTypes.string,
  removeEventHandler: PropTypes.func.isRequired,
  description: PropTypes.string,
};
export default Event;
