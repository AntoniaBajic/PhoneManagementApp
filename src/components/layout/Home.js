import React from 'react';
import Contacts from '../contacts/Contacts';
import ContactForm from '../contacts/ContactForm';
import ContactsFilter from '../contacts/ContactsFilter';

const Home = () => {
  return (
    <div>
      <ContactForm />
      <ContactsFilter />
      <Contacts />
    </div>
  );
};

export default Home;
