import { fetchContacts, addContact, deleteContact } from './operations';
const { createSlice } = require('@reduxjs/toolkit');
const contactsInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
  },
  [deleteContact.pending]: handlePending,
  [deleteContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    state.items = state.items.filter(item => item.id !== action.payload);
  },
  [deleteContact.rejected]: handleRejected,
  // reducers: {
  //   addContact(state, action) {
  //     state.contacts.push(action.payload);
  //   },
  //   deleteContact(state, action) {
  //     state.contacts = state.contacts.filter(
  //       contact => contact.id !== action.payload.id
  //     );
  //   },
  //   getVisibleContacts(state, action) {
  //     state.filter = action.payload;
  //   },
  // },
});

export const contactsReducer = contactsSlice.reducer;