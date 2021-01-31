import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import { GoOrganization } from 'react-icons/go';
import { RiDeleteBin3Fill } from 'react-icons/ri';
import s from '../ContactList/ContactList.module.css';
import { filterContactsByName } from '../../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../../redux/contacts/contacts-operations';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(filterContactsByName);

  useEffect(() => {
    dispatch(fetchContacts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ondeleteContact = id => dispatch(deleteContact(id));

  return (
    <>
      <ul className={s.list}>
        {contacts.map(({ id, name, number }) => (
          <li className={s.item} key={id}>
            <GoOrganization />
            <span className={s.text}>{name}: </span>
            <span className={s.text}>{number}</span>
            <button className={s.btn} onClick={() => ondeleteContact(id)}>
              <RiDeleteBin3Fill value={{ width: 20 }} />{' '}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
