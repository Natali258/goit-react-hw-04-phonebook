import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export const App = () => {
  const [contacts, setContacts] = useState(
    () =>
      JSON.parse(window.localStorage.getItem('userKey')) ?? [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ]
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('userKey', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const isExist = contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    console.log(contacts);
    setContacts(prev => [
      ...prev,
      {
        id: nanoid(),
        name,
        number,
      },
    ]);
  };

  const getFilterValue = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };
  const deleteContact = userId => {
    setContacts(prevState => {
      return contacts.filter(({ id }) => id !== userId);
    });
  };
  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div>
      <Section title="Phonebook">
        <ContactForm addContacts={addContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={changeFilter} />
        <Contacts
          contacts={getFilterValue()}
          deleteContact={deleteContact}
          changeFilter={changeFilter}
        />
      </Section>
    </div>
  );
};
