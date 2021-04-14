import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
});

export default function HomePage() {
  const styles = useStyles();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome!{' '}
        <span role="img" aria-label="Иконка приветствия">
          😊
        </span>
      </h1>
    </div>
  );
}
