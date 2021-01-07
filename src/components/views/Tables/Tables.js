import React from 'react';
import styles from './Tables.module.scss';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import Button from '@material-ui/core/Button';

const demoContent = [
  { id: '1', hour: 10, table: 4, duration: 4, type: 'event', name: 'Robinson' },
  { id: '2', hour: 11, table: 2, duration: 2, type: 'event', name: 'Smith' },
];

const tablesNumber = 6;

const findTableForHour = (content, table, hour) => {
  for (let i = 0; i < content.length; i++) {
    const startHour = content[i].hour;
    const endHour = content[i].hour + content[i].duration;
    if (content[i].table === table && hour >= startHour && hour < endHour) {
      return content[i];
    }
  }
  return null;
};

const createHours = (content) => {
  let hours = [];
  let key = 0;
  for (let hourNo = 10.0; hourNo < 24.0; hourNo += 0.5) {
    let hour = { hour: hourNo, tables: [] };
    for (let tableNo = 1; tableNo <= tablesNumber; tableNo++) {
      const foundTable = findTableForHour(content, tableNo, hourNo);
      let table = {};
      if (foundTable === null) {
        table = { key: key, hour: hourNo, table: tableNo, type: null, backgroundColor: 'white' };
      } else {
        table = { key: key, id: foundTable.id, hour: hourNo, table: tableNo, type: foundTable.type, backgroundColor: 'green', name: foundTable.name };
      }
      hour.tables.push(table);
      key++;
    }
    hours.push(hour);
  }
  return hours;
};

const formatTime = (time) => {
  if (time % 2) {
    return Math.floor(time) + ':30';
  } else {
    return time + ':00';
  }
};

const Tables = props => {
  let headers = [];
  for (let i = 1; i <= tablesNumber; i++) {
    headers.push(<TableCell key={i}>{i}</TableCell>);
  }

  let hours = [];
  hours = createHours(demoContent);

  return (
    <div className={styles.component}>
      <form className={styles.container} noValidate>
        <TextField
          id="datetime-local"
          type="datetime-local"
          defaultValue="2021-01-01T10:00"
          className={styles.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              {headers}
            </TableRow>
          </TableHead>
          <TableBody>
            {hours.map((hour) =>
              <TableRow key={hour.hour}>
                <TableCell variant='head'>{formatTime(hour.hour)}</TableCell>
                {hour.tables.map((table) => {
                  let link = '';
                  if (hour.tables.type === 'event') {
                    link = `${process.env.PUBLIC_URL}/events/${table.id}`;
                  } else if (hour.tables.type === 'booking') {
                    link = `${process.env.PUBLIC_URL}/booking/${table.id}`;
                  }
                  return (
                    <TableCell href={link} style={{ backgroundColor: table.backgroundColor }} key={table.key}>{table.name}</TableCell>
                  );
                }
                )}
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </div >
  );
};

Tables.propTypes = {
  bookings: PropTypes.array,
  events: PropTypes.array,
};

export default Tables;
