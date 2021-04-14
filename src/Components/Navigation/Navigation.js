import React from 'react';
import { NavLink } from 'react-router-dom';
import useStyles from './useStyles';
import { useSelector } from 'react-redux';
import { getIsAuthenticated } from '../../redux/authOperation/auth-seletor';

const Navigation = () => {
  const styles = useStyles();

  const isAuth = useSelector(getIsAuthenticated);
  return (
    <nav>
      <NavLink to="/" exact className={styles.link}>
        Home Page
      </NavLink>

      {isAuth && (
        <NavLink
          to="/contacts"
          exact
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          PhoneBook
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
