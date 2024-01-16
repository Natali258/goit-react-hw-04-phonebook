import React from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(window.localStorage.getItem('userKey'));
    if (contacts?.length) {
      this.setState({ contacts });
    }
  }

  componentDidUpdate(_, prevState) {
    window.localStorage.setItem('userKey', JSON.stringify(this.state.contacts));
  }

  addContact = ({ name, number }) => {
    const isExist = this.state.contacts.some(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    if (isExist) {
      alert(`${name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [
        ...prev.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
  };
  deleteContact = userId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== userId),
      };
    });
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getFilterValue = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };
  render() {
    const addContact = this.addContact;
    const deleteContact = this.deleteContact;
    const saveFilter = this.changeFilter;
    const filterValue = this.getFilterValue();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm addContacts={addContact} />
        </Section>
        <Section title="Contacts">
          <Filter filter={saveFilter} />
          <Contacts
            contacts={filterValue}
            deleteContact={deleteContact}
            saveFilter={saveFilter}
          />
        </Section>
      </div>
    );
  }
}
