import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contactsSlice';
import { selectedName } from '../filters/filtersSlice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectedName],
  (contacts, searchStr) => {
    return contacts.filter(item => {
      return item.name.toLowerCase().includes(searchStr.toLowerCase());
    });
  }
);
