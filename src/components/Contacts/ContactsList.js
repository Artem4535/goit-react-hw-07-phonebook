import css from './Contacts.module.css';
import { useSelector } from 'react-redux';
import ContactsItem from './ContactsItem';
import { getContacts } from 'redux/selectors';

export default function Contacts() {
  const contacts = useSelector(getContacts);
  // const filter = useSelector(getFilter);
  console.log(contacts);

  // const searchVisibleContacts = () => {
  //   const normalizedFilter = filter.toLocaleLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLocaleLowerCase().includes(normalizedFilter)
  //   );
  // };

  // const getVisibleContacts = searchVisibleContacts();

  return (
    <>
      <ul className={css.list}>
        {contacts?.map(contact => (
          <ContactsItem key={contact.id} {...contact} />
        ))}
      </ul>
    </>
  );
}
