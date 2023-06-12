import React, { useEffect } from 'react';
import FormHandler from './PhoneBook/PhoneBook';
import Contacts from './Contacts/ContactsList';
import Section from './Section/Section';
import Filter from './Filter/Filter';
import { fetchContacts } from 'redux/operations';
import { useDispatch } from 'react-redux';

export function App() {
  const dispatch = useDispatch();
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
        <Contacts title={'Contacts'} />
      </Section>
    </>
  );
}
