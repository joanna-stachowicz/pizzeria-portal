import React from 'react';
import styles from './Waiter.module.scss';
import { Link } from 'react-router-dom';

const Waiter = props => (
  <div className={styles.component}>
    <h2>Waiter view</h2>
    <Link to='/waiter/order/new'></Link>
    <Link to='/waiter/order/:id'></Link>
  </div>
);

export default Waiter;
