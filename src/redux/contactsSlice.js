import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  fetchContactsThunk,
} from './contactsOps';

const initialContacts = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialContacts,
  selectors: {
    selectContacts: state => state.contacts.items,
    selectLoading: state => state.contacts.loading,
    selectError: state => state.contacts.error,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContactsThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = payload.reverse();
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items.unshift(payload);
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, { payload }) => {
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
        state.contacts.loading = false;
        state.contacts.error = null;
      })
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.pending,
          deleteContactThunk.pending,
          addContactThunk.pending
        ),
        state => {
          state.contacts.loading = true;
          state.contacts.error = false;
        }
      )
      .addMatcher(
        isAnyOf(
          fetchContactsThunk.rejected,
          deleteContactThunk.rejected,
          addContactThunk.rejected
        ),
        (state, { payload }) => {
          state.contacts.loading = false;
          state.contacts.error = payload;
        }
      );
    // .addMatcher(
    //   isAnyOf(
    //     fetchContactsThunk.fulfilled,
    //     deleteContactThunk.fulfilled,
    //     addContactThunk.fulfilled
    //   ),
    //   (state, { payload }) => {
    //     state.contacts.loading = false;
    //     state.contacts.error = payload;
    //   }
    // );
  },
});

// export const selectContacts = state => state.contacts.contacts;
// export const selectLoading = state => state.contacts.loading;
// export const selectError = state => state.contacts.error;

// export const selectFilteredContacts = createSelector(
//   [selectContacts, selectedName],
//   (contacts, filter) => {
//     const searchData = filter.toLowerCase();
//     return contacts?.filter(
//       contact =>
//         contact.name.toLowerCase().includes(searchData) ||
//         contact.number.includes(searchData)
//     );
//   }
// );
export const { selectContacts, selectLoading, selectError } =
  contactsSlice.selectors;
export const contactsReducer = contactsSlice.reducer;
// export const { deleteContact, addContact } = contactsSlice.actions;
// export const { selectContacts } = contactsSlice.selectors;
