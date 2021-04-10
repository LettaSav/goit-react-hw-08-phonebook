import { useSelector } from 'react-redux';
import { getContacts } from './redux/contacts-selectors';
import useStyles from './AppStyles';

import React from 'react';

import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';

function App() {
  const classes = useStyles();
  const contacts = useSelector(getContacts);

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

export default App;
