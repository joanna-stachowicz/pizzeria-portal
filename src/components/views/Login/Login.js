import React from 'react';
import styles from './Login.module.scss';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Login = props => (
  <div className={styles.component}>
    <div>
      <FormControl margin="normal">
        <InputLabel htmlFor="login-input">Login</InputLabel>
        <Input
          id="login-id"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
    <div>
      <FormControl margin="normal">
        <InputLabel htmlFor="password-input">Password</InputLabel>
        <Input
          id="password-id"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircleIcon />
            </InputAdornment>
          }
        />
      </FormControl>
    </div>
    <div>
      <FormControl margin="normal">
        <Button variant="contained" color="primary">
          Login
        </Button>
      </FormControl>
    </div>
  </div>
);

export default Login;
