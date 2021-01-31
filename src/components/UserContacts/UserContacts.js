import s from './UserContacts.module.css';
import ContactForm from '../UserContacts/ContactForm/ContactForm';
import Filter from '../UserContacts/Filter/Filter';
import ContactList from '../UserContacts/ContactList/ContactList';

export default function UserContacts() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
