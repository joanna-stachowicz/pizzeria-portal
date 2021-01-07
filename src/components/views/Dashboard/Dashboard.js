import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const demoContent = [
  { id: '1', table: '1', startTime: '15:00', duration: '2 h' },
  { id: '2', table: '1', startTime: '18:30', duration: '3 h' },
  { id: '3', table: '2', startTime: '19:00', duration: '2 h' },
  { id: '4', table: '4', startTime: '12:00', duration: '4 h' },
  { id: '5', table: '4', startTime: '20:00', duration: '1 h' },
  { id: '6', table: '5', startTime: '16:00', duration: '2 h' },
  { id: '7', table: '6', startTime: '11:00', duration: '3 h' },
  { id: '8', table: '6', startTime: '17:00', duration: '2 h' },
];

const Dashboard = props => (
  <div className={styles.component}>
    <div className={styles.tableOrder}>
      <h1>Today&apos;s order</h1>
      <TableContainer component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <ThemeProvider>
              <TableRow className={styles.header}>
                <StyledTableCell>Remote</StyledTableCell>
                <StyledTableCell>Local</StyledTableCell>
              </TableRow>
            </ThemeProvider>
          </TableHead>
          <TableBody>
            <TableCell align="center">15</TableCell>
            <TableCell align="center">10</TableCell>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
    <div className={styles.tableBookingsEvents}>
      <h1>Today&apos;s bookings and events</h1>
      <TableContainer component={Paper}>
        <Table className={styles.table}>
          <TableHead>
            <ThemeProvider>
              <TableRow className={styles.header}>
                <StyledTableCell>Table</StyledTableCell>
                <StyledTableCell>Time</StyledTableCell>
                <StyledTableCell>Duration</StyledTableCell>
              </TableRow>
            </ThemeProvider>
          </TableHead>
          <TableBody>
            {demoContent.map(row => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.table}
                </StyledTableCell>
                <StyledTableCell>
                  {row.startTime}
                </StyledTableCell>
                <StyledTableCell>
                  {row.duration}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  </div>
);

export default Dashboard;
