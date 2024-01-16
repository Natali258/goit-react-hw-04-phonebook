import React, { useState } from 'react';
import s from './ContactForm.module.css';

export const ContactForm = ({ addContacts }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeFilter = e => {
    e.preventDefault();
    addContacts(name, number);
    setName('');
    setNumber('');
  };
  return (
    <div>
      <form onSubmit={changeFilter} className={s.forma}>
        <span className={s.label}>Name</span>
        <input
          value={name}
          onChange={e => setName(e.target.value)}
          type="text"
          name="name"
          required
          className={s.input}
        />
        <span className={s.label}>Number</span>
        <input
          value={number}
          onChange={e => setNumber(e.target.value)}
          type="tel"
          name="number"
          required
          className={s.input}
        />
        <button type="submit" className={s.dtnAdd}>
          Add contact
        </button>
      </form>
    </div>
  );
};
