import s from './Contacts.module.css';

export const Contacts = ({ contacts, deleteContact }) => {
  return (
    <div>
      <ul className={s.contactsList}>
        {contacts.map(contact => (
          <li className={s.contactLi} key={contact.id}>
            {contact.name}: {contact.number}
            <button
              onClick={() => deleteContact(contact.id)}
              className={s.btnLi}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
