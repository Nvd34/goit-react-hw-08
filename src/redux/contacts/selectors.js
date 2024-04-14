import { selectNameFilter } from '../filters/selectors';
import { createSelector } from '@reduxjs/toolkit';


export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;


export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, textFilter) => {
    if (contacts.length > 0 && textFilter !== '') {
      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(textFilter.toLowerCase())
      );
    } else return contacts;
  }
);