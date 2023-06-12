import { createAsyncThunk } from '@reduxjs/toolkit';

const baseUrl = 'https://6485fd3ca795d24810b78ff0.mockapi.io';
export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/contacts`);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, thunkAPI) => {
    const options = {
      method: 'POST',
      body: JSON.stringify(contact),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    };
    try {
      const response = await fetch(`${baseUrl}/contacts`, options);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    const options = {
      method: 'DELETE',
    };
    try {
      const response = await fetch(`${baseUrl}/contacts/${contactId}`, options);
      return response.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
