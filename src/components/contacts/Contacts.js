import React, { Fragment, useContext, useEffect } from 'react';
import ContactItem from './ContactItem';
import ContactContext from '../../context/contact/contactContext';

const Contacts = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, getContacts, filtered } = contactContext;

  useEffect(() => {
    getContacts();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
      <button className='btn btn-loadmore'>LOAD MORE</button>
    </Fragment>
  );
};

export default Contacts;
