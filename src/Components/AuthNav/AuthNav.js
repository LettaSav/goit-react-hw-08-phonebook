import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './useStyles';

const AuthNav = () => {
  const styles = useStyles();
  return (
    <div>
      <NavLink
        to="/register"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        exact
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </div>
  );
};
export default AuthNav;
