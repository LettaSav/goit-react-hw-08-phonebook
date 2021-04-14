import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
  button: {
    width: 90,
    color: '#61677C',
    marginLeft: 10,
    marginRight: 10,

    transition: 'all 0.2s ease-in-out',
    cursor: 'pointer',
    margin: 'auto',

    border: 0,
    outline: 0,
    borderRadius: 16 * 20,
    padding: 10,
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#B8F2E6',
      color: '#5E6472',
      transform: 'translatey(3px)',
      boxShadow: 'none',
    },
  },
});

export default useStyles;
