import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
  },
});
export default useStyles;
