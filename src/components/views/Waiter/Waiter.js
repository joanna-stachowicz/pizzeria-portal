import React from 'react';
import PropTypes from 'prop-types';
import styles from './Waiter.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

class Waiter extends React.Component {
  static propTypes = {
    tables: PropTypes.object,
    fetchTables: PropTypes.func,
    updateTables: PropTypes.func,
    loading: PropTypes.shape({
      active: PropTypes.bool,
      error: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
    }),
  }

  componentDidMount() {                     // metoda wywołuje się kiedy komponent pojawia się na stronie; montuje się (w tym wypadku Waiter)
    const { fetchTables, updateTables } = this.props;     // pobranie propsa fetchTables ze wszystkich propsów i stworzenie stałej dla tego zdestrukturyzowanego propsa
    fetchTables();                          // wywołanie funkcji fetchTables, która zaistniała dzięki destrukturyzacji propsa
    this.updateTables = updateTables;
  }

  createButton(id, status) {
    return <Button onClick={() => this.updateTables(id, status)}>{status}</Button>;
  }

  renderActions(status, id) {
    switch (status) {
      case 'free':
        return (
          <>
            {this.createButton(id, 'thinking')}
            {this.createButton(id, 'new order')}
          </>
        );
      case 'thinking':
        return this.createButton(id, 'new order');
      case 'ordered':
        return this.createButton(id, 'prepared');
      case 'prepared':
        return this.createButton(id, 'delivered');
      case 'delivered':
        return this.createButton(id, 'paid');
      case 'paid':
        return this.createButton(id, 'free');
      default:
        return null;
    }
  }

  render() {
    const { loading: { active, error }, tables } = this.props;

    if (active || !tables.length) {
      return (
        <Paper className={styles.component}>
          <p>Loading...</p>
        </Paper>
      );
    } else if (error) {
      return (
        <Paper className={styles.component}>
          <p>Error! Details:</p>
          <pre>{error}</pre>
        </Paper>
      );
    } else {
      return (
        <Paper className={styles.component}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Table</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Order</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tables.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>
                    {row.status}
                  </TableCell>
                  <TableCell>
                    {row.order && (
                      <Button to={`${process.env.PUBLIC_URL}/waiter/order/${row.order}`}>
                        {row.order}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell>
                    {this.renderActions(row.status, row.id)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      );
    }
  }
}

export default Waiter;
