import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
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
