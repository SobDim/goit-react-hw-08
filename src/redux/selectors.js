import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';
import { selectedName } from './filtersSlice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectedName],
  (contacts, searchStr) => {
    return contacts.filter(item =>
      item.name.toLowerCase().includes(searchStr.toLowerCase())
    );
  }
);
