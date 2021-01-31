import { createSelector } from '@reduxjs/toolkit';

export const getValueForFilter = state => state.contacts.filter;
export const getContact = state => state.contacts.items;

export const filterContactsByName = createSelector(
  [getContact, getValueForFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLocaleLowerCase();

    return contacts.filter(({ name }) =>
      name.toLocaleLowerCase().includes(normalizedFilter),
    );
  },
);
