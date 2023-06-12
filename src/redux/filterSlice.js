const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: '',
  },
  reducers: {
    getVisibleContacts(state, action) {
      state.filter = action.payload;
    },
  },
});
export const filterReducer = filterSlice.reducer;
export const { getVisibleContacts } = filterSlice.actions;
