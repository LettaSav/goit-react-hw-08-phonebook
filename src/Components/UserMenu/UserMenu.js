import useStyles from './useStyles';
import { useSelector, useDispatch } from 'react-redux';

import { logOut } from '../../redux/authOperation/auth-operations';
import { getUserName } from '../../redux/authOperation/auth-seletor';
import avatar from '../../img/avatar.png';

const UserMenu = () => {
  const dispatch = useDispatch();
  const styles = useStyles();
  const name = useSelector(getUserName);
  return (
    <div className={styles.container}>
      <img src={avatar} alt="" width="32" className={styles.avatar} />
      <span className={styles.name}>Welcome, {name}</span>
      <button className={styles.button} onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
