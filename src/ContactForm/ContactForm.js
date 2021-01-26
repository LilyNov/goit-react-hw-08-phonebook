import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../redux/contacts.js/contacts-operations';
import s from '../ContactForm/ContactForm.module.css';

export default function Phonebook() {
  const { register, handleSubmit, errors } = useForm();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const myNamesInItem = useSelector(state => state.contacts.items);

  const reset = () => {
    setName('');
    setNumber('');
  };

  const onSubmit = () => {
    const getContacts = myNamesInItem.map(contact =>
      contact.name.toLocaleLowerCase(),
    );

    const isGetContactAlready = getContacts.includes(name.toLocaleLowerCase());

    if (isGetContactAlready) {
      reset();
      return alert(`${name} is already in contacts!`);
    }
    dispatch(addContact(name, number));
    reset();
  };

  const handleChange = e => {
    e.preventDefault();
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={s.label}>
          Name
          <input
            className={s.input}
            autoComplete="off"
            name="name"
            type="text"
            value={name}
            ref={register({ required: true, minLength: 3 })}
            onChange={handleChange}
          />
        </label>
        {errors.name && errors.name.type === 'required' && (
          <p className={s.textError}>This is required </p>
        )}

        {errors.name && errors.name.type === 'minLength' && (
          <p className={s.textError}>
            This is field is required min length of 3
          </p>
        )}

        <label className={s.label}>
          Number
          <input
            className={s.input}
            autoComplete="off"
            name="number"
            type="text"
            value={number}
            ref={register({
              required: true,
              pattern: /^[0-9]+$/gm,
              minLength: 7,
            })}
            onChange={handleChange}
          />
        </label>

        {errors.number && errors.number.type === 'required' && (
          <p className={s.textError}>This is required </p>
        )}

        {errors.number && errors.number.type === 'pattern' && (
          <p className={s.textError}>There must be numbers</p>
        )}

        {errors.number && errors.number.type === 'minLength' && (
          <p className={s.textError}>Number too short</p>
        )}

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    </div>
  );
}
