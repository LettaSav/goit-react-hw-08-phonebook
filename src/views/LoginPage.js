import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from '../redux/authOperation/auth-operations';
import useStyles from './useStyles';
import { toast } from 'react-toastify';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = useStyles();
  const dispatch = useDispatch();
  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      return toast.error('Please enter email and password!!');
    }
    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.main_container}>
      <h1 className={styles.header_title}>Login</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>Email</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          className={styles.login_input}
        />

        <label className={styles.label}>Password</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handleInputChange}
          className={styles.login_input}
        />

        <button className={styles.submit_button} type="submit">
          Enter
        </button>
      </form>
    </div>
  );
}
