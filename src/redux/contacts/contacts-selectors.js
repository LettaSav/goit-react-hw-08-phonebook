import { createSelector } from '@reduxjs/toolkit';

export const getFilter = state => state.contacts.filter;

export const getContacts = state => state.contacts.items;

export const getError = state => state.contacts.error;

export const showContacts = createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
