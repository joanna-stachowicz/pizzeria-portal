import React from 'react';
import styles from './Kitchen.module.scss';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Switch from '@material-ui/core/Switch';

const demoData = [
  { no: 123, table: 4, dine: 'Salad', details: 'cucumber, tomatoes, cheese, fresh herbs, black pepper', done: false },
  { no: 234, table: 6, dine: 'Pizza', details: 'sauce: tomato; toppings: olives, green peppers, salami; crust: wholewheat', done: true },
  { no: 456, table: 6, dine: 'Pizza', details: 'sauce: tomato; toppings: olives, green peppers, salami; crust: wholewheat', done: true },
  { no: 456, table: 6, dine: 'Pizza', details: 'sauce: tomato; toppings: olives, green peppers, salami; crust: wholewheat', done: true },
];

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

const Kitchen = props => (
  <List className={styles.component}>
    {demoData.map((item) =>
      <div key={item.no}>
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <h2>{item.no}</h2>
          </ListItemAvatar>
          <ListItemText
            id={item.order}
            primary={`Table ${item.table}`}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  className={styles.inline}
                  color="textPrimary"
                >
                  {item.dine}
                </Typography>
                {` - ${item.details}`}
              </React.Fragment>
            }
          />
          <ListItemSecondaryAction>
            <Switch
              edge="end"
              inputProps={{ 'aria-labelledby': `${item.no}` }}
              checked={item.done}
            />
          </ListItemSecondaryAction>
        </ListItem>
        <Divider variant="inset" component="li" />
      </div>
    )}
  </List >
);

export default Kitchen;
