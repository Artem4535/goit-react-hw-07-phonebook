export const getContacts = store => store.contacts.items;
export const getFilter = store => store.filter.filter;
export const getLoadingStatus = store => store.contacts.isLoading;
export const getError = store => store.contacts.error;
