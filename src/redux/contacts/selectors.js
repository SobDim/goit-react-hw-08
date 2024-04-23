import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './slice';
import { selectedName } from '../filters/slice';

export const selectFilteredContacts = createSelector(
  [selectContacts, selectedName],
  (contacts, searchStr) => {
    return contacts.filter(item => {
      return item.name.toLowerCase().includes(searchStr.toLowerCase());
    });
  }
);
