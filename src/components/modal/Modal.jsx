import React, { useState } from 'react';
import moment from 'moment';
import { createEvent } from '../../gateway/events';
import { addMinutes, getDateTime } from '../../utils/dateUtils';
import './modal.scss';
import PropTypes from 'prop-types';

const Modal = ({ modalWindow, getEventsList }) => {
  const [eventData, setEventData] = useState({
    title: '',
    date: moment(new Date()).format('YYYY-MM-DD'),
    startTime: moment(new Date()).format('HH:mm'),
    endTime: moment(addMinutes(15)).format('HH:mm'),
    description: '',
  });

  const handleSubmit = event => {
    event.preventDefault();

    const eventObject = {
      title,
      dateFrom: getDateTime(date, startTime),
      dateTo: getDateTime(date, endTime),
      description,
    };

    createEvent(eventObject).then(() => getEventsList());
    modalWindow();
  };

  const { title, date, startTime, endTime, description } = eventData;

  const handleChange = event => {
    const { name, value } = event.target;

    setEventData({
      ...eventData,
      [name]: value,
    });
  };

  return (
    <div className="modal overlay">
      <div className="modal__content">
        <div className="create-event">
          <button className="create-event__close-btn" onClick={modalWindow}>
            +
          </button>
          <form className="event-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="title"
              placeholder="Title"
              className="event-form__field"
              value={title}
              onChange={handleChange}
            />
            <div className="event-form__time">
              <input
                type="date"
                name="date"
                className="event-form__field"
                value={date}
                onChange={handleChange}
              />
              <input
                type="time"
                name="startTime"
                className="event-form__field"
                value={startTime}
                onChange={handleChange}
                required
              />
              <span>-</span>
              <input
                type="time"
                name="endTime"
                className="event-form__field"
                value={endTime}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="description"
              placeholder="Description"
              className="event-form__field"
              value={description}
              onChange={handleChange}
            ></textarea>
            <button type="submit" className="event-form__submit-btn">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalWindow: PropTypes.func.isRequired,
  getEventsList: PropTypes.func.isRequired,
};

export default Modal;
