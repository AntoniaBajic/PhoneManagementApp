import React, { useContext, useState, useEffect } from 'react';
import ContactContext from '../../context/contact/contactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;
  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        first_name: '',
        last_name: '',
        email: '',
      });
    }
  }, [contactContext, current]);
  const [contact, setContact] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });

  const { first_name, last_name, email } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
  };
  const clearAll = () => {
    clearCurrent();
  };
  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='First Name'
        name='first_name'
        value={first_name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Last Name'
        name='last_name'
        value={last_name}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />

      <input
        type='submit'
        className='btn btn-edit'
        value={current ? 'Edit Contact' : 'Add Contact'}
      />
      {current && (
        <div>
          <button className='btn btn-clear' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
