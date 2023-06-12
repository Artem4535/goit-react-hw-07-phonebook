import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FormHandler from './PhoneBook/PhoneBook';
import Contacts from './Contacts/ContactsList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { getLoadingStatus, getError } from 'redux/selectors';

export function App() {
  const dispatch = useDispatch();
  const error = useSelector(getError);
  const loadingStatus = useSelector(getLoadingStatus);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <FormHandler />
      </Section>
      <Section>
        <Filter />
        {loadingStatus && !error && <b>Request in progress...</b>}
        <Contacts title={'Contacts'} />
      </Section>
    </>
  );
}
