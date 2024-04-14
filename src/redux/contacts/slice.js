import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';
import { logOut } from '../auth/operations';

const slice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(addContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.loading = false;
        state.items = state.items.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(deleteContact.rejected, state => {
        state.loading = false;
        state.error = true;
      })
      .addCase(editContact.pending, state => {
        state.error = false;
        state.loading = true;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = false;
        const findIndex = state.items.findIndex(
          item => item.id === action.payload.id
        );
        if (findIndex !== -1) state.items[findIndex] = action.payload;
      })
      .addCase(editContact.rejected, state => {
        state.error = true;
        state.loading = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.items = [];
        state.error = false;
        state.loading = false;
      }),
});

export default slice.reducer;
