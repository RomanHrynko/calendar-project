import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import { getEvents, deleteEvents } from '../../gateway/events';
import Modal from '../modal/Modal';
import './calendar.scss';
import PropTypes from 'prop-types';

const Calendar = ({ weekDates, modalWindow, statusModalWindow }) => {
  const [events, setEvents] = useState([]);

  const getEventsList = () => {
    getEvents()
      .then(events => {
        const weekDate = weekDates.map(el => moment(el).format('MMMM DD YYYY'));
        const newEvents = events.filter(({ dateFrom }) =>
          weekDate.includes(moment(dateFrom).format('MMMM DD YYYY')),
        );
        return setEvents(newEvents);
      })
      .catch(error => alert(error.message));
  };

  const removeEventHandler = id => {
    deleteEvents(id).then(() => getEventsList());
  };

  useEffect(() => {
    getEventsList();
  }, []);

  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <section className="calendar">
      <header className="calendar__header">
        {weekDates.map(dayDate => (
          <Navigation key={dayDate.getDay()} dayDate={dayDate} />
        ))}
      </header>
      <div className="calendar__body">
        <div className="calendar__week-container">
          <div className="calendar__time-scale">
            {hours.map(hour => (
              <Sidebar key={hour} hour={hour} />
            ))}
          </div>
          <Week weekDates={weekDates} events={events} removeEventHandler={removeEventHandler} />
        </div>
      </div>
      {statusModalWindow && <Modal modalWindow={modalWindow} getEventsList={getEventsList} />}
    </section>
  );
};

Calendar.propTypes = {
  statusModalWindow: PropTypes.bool,
  modalWindow: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
};

export default Calendar;
