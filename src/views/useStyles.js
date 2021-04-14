import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'baseline',
    justifyContent: 'baseline',
    padding: 16,
    width: 16 * 20,
    margin: 'auto',
  },

  label: {
    marginBottom: 5,
    margin: 'auto',
  },

  login_input: {
    width: 240,
    height: 50,
    marginBottom: 15,
    margin: 'auto',
    background: '#fff',

    borderRadius: 20,
    border: 0,
    padding: 10,

    textShadow: '1px 1px 0 white',
    outline: 'none',
    fontSize: 16,
    fontFamily: 'Abel sans-serif',
    color: '#5E6472',
    transition: '0.2s linear',
  },
  submit_button: {
    width: 120,
    color: '#61677C',

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
  main_container: {
    width: 450,
    height: 'auto',
    borderRadius: 5,
    margin: '2% auto',
    boxShadow: '0 9 50 hsla(20, 67%, 75%, 0.31)',
    padding: '2%',
    backgroundImage: 'linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%)',
  },
  header_title: {
    fontSize: '250%',
    fontFamily: 'Playfair Display serif',
    color: '#3e403f',
  },
});

export default useStyles;
