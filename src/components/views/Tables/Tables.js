import React from 'react';
import styles from './Tables.module.scss';
import { Link } from 'react-router-dom';

const Tables = props => (
  <div className={styles.component}>
    <h2>Tables view</h2>
    <Link to='/tables/booking/:id'></Link>
    <Link to='/tables/booking/new'></Link>
    <Link to='/tables/events/:id'></Link>
    <Link to='/tables/events/new'></Link>
  </div>
);

export default Tables;
