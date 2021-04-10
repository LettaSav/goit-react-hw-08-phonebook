import useStyles from './useStyle';

import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { showContacts, getError } from '../../redux/contacts-selectors';
import { deleteContact } from '../../redux/contacts-operations';

const ContactList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const ShowContacts = useSelector(showContacts);
  const error = useSelector(getError);

  return (
    <>
      <ul className={classes.contact_list}>
        {ShowContacts.map(({ id, name, number }) => (
          <li key={id} className={classes.contact_item}>
            <p>
              {name}: {number}
            </p>
            <button
              className={classes.btn}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {error &&
        toast.error('Something went wrong!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })}
    </>
  );
};


export default ContactList;
