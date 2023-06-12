import css from './Contacts.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';

export const ContactsItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <>
      <li className={css.item}>
        <p>
          {name}: {phone}
        </p>
        <button onClick={() => dispatch(deleteContact(id))} type="button">
          Delete
        </button>
      </li>
    </>
  );
};

export default ContactsItem;
