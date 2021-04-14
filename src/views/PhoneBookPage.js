import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/contacts-operations';
import ContactForm from '../Components/ContactForm/ContactForm';
import Filter from '../Components/Filter/Filter';
import ContactList from '../Components/ContactList/ContactList';
import useStyles from '../AppStyles';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/contacts-selectors';

export default function PhoneBook() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const contacts = useSelector(getContacts);

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  return (
    <div className={classes.main_container}>
      <h1 className={classes.header_title}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length >= 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>We coudnt find any contacts in your phonebook, add some contacts</p>
      )}
    </div>
  );
}
