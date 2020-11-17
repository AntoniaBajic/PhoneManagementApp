import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;
  const { id, first_name, email, last_name } = contact;

  const onDelete = () => {
    deleteContact(id);
    clearCurrent();
  };
  return (
    <div className='card bg-light'>
      <ul>
        <li>{id}</li>
        <li>
          {first_name} {last_name}
        </li>
        <li>
          <i className='fas fa-envelope-open '></i> {email}
        </li>
      </ul>
      <button className='btn btn-edit' onClick={() => setCurrent(contact)}>
        Edit
      </button>
      <button className='btn btn-danger' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
