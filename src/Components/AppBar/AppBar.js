import React from 'react';

import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import { getIsAuthenticated } from '../../redux/authOperation/auth-seletor';
import useStyles from './useStyles';

const AppBar = () => {
  const styles = useStyles();
  const isAuth = useSelector(getIsAuthenticated);
  return (
    <header className={styles.header}>
      <Navigation />
      {isAuth ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
