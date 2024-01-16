import React from 'react';
import s from './ContactForm.module.css';

export class ContactForm extends React.Component {
  state = {
    name: '',
    number: '',
  };
  handleChangeInput = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  saveContact = e => {
    e.preventDefault();
    this.props.addContacts({
      name: this.state.name,
      number: this.state.number,
    });
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.saveContact} className={s.forma}>
          <span className={s.label}>Name</span>
          <input
            value={this.state.name}
            onChange={this.handleChangeInput}
            type="text"
            name="name"
            required
            className={s.input}
          />
          <span className={s.label}>Number</span>
          <input
            value={this.state.number}
            onChange={this.handleChangeInput}
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
  }
}
