import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../../redux/contacts/contacts-actions';
import s from '../Filter/Filter.module.css';
import { getValueForFilter } from '../../../redux/contacts/contacts-selectors';

export default function Filter() {
  const value = useSelector(getValueForFilter);
  const dispatch = useDispatch();
  const OnFilterContacts = e =>
    dispatch(contactsActions.changeFilter(e.currentTarget.value));

  return (
    <>
      <label>
        <input
          className={s.input}
          type="text"
          value={value}
          onChange={OnFilterContacts}
          placeholder=" Fined contacts by name"
        ></input>
      </label>
    </>
  );
}
