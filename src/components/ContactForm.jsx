import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contactsSlice';

import styles from '../styles/ContactForm.module.css';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

  const addNewContact = e => {
    e.preventDefault();


    const formData = { name, number };

    const isInContacts = contacts
      ? contacts.some(
          ({ name, number }) =>
            name.toLowerCase() === formData.name.toLowerCase() ||
            number === formData.number
        )
      : false;

    if (isInContacts) {
      alert(`${formData.name} is already in contacts`);
      return;
    }

    const newContact = {
      ...formData,
      id: nanoid(),
    };
    dispatch(addContact(newContact));
    setName('');
    setNumber('');
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };
  const handleChangeNum = e => {
    setNumber(e.target.value);
  };

  return (
    <form className={styles.contactForm} onSubmit={addNewContact}>
      <label htmlFor={nanoid()} className={styles.label}>
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          value={name}
          onChange={handleChangeName}
          required
        />
      </label>
      <label htmlFor={nanoid()} className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={number}
          onChange={handleChangeNum}
          required
        />
      </label>

      <button className={styles.addButton} type="submit">
        add contact
      </button>
    </form>
  );
};

export default ContactForm;
