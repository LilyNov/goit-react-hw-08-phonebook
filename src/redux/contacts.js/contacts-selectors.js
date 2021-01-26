import { createSelector } from 'reselect';

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

// export const filterContactsByName = state => {
//   const contacts = getContact(state);
//   const filter = getValueForFilter(state);
//   const normalizedFilter = filter.toLocaleLowerCase();

//   return contacts.filter(({ name }) =>
//     name.toLocaleLowerCase().includes(normalizedFilter),
//   );
// };
