import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/authOperation/auth-operations';
import { toast } from 'react-toastify';
import useStyles from './useStyles';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const styles = useStyles();
  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
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
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      return toast.error('Please enter your name, email and password!!');
    }
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={styles.main_container}>
      <h1 className={styles.header_title}>Registration</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          className={styles.login_input}
        />

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

        <button type="submit" className={styles.submit_button}>
          Registration
        </button>
      </form>
    </div>
  );
}
