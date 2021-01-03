import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Tables = ({ bookings, events }) => {
  if (bookings === undefined) {
    bookings = [{ id: 0 }];
  }
  if (events === undefined) {
    events = [{ id: 0 }];
  }
  const bookingLinks = bookings.map(({ id }) => (<Link to={`/tables/booking/${id}`} key={id}> Booking</Link >));
  const eventsLinks = events.map(({ id }) => (<Link to={`/tables/event/${id}`} key={id}> Event</Link >));

  return (
    <div className={styles.component}>
      <h2>Tables view</h2>
      {bookingLinks}
      {eventsLinks}
      <Link to='/tables/booking/new'>New booking</Link>
      <Link to='/tables/events/new'>New event</Link>
    </div>
  );
};

Tables.propTypes = {
  bookings: PropTypes.array,
  events: PropTypes.array,
};

export default Tables;
