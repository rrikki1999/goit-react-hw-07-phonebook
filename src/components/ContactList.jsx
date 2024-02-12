import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';

export const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts.items);
  const filter = useSelector(state => state.filter.filter || '');


  // const filterContacts =() => contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(filter.trim().toLowerCase())
    
  // );
  const filterContacts = () => {
    if (!Array.isArray(contacts)) {
      return [];
    }
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };
  

  return (
    <>
      <ul>
        {filterContacts().map(item => {
          return (
            <li key={item.id}>
              <p>
                {item.name}: <span>{item.number}</span>
              </p>
              <button
                type="button"
                name="delete"
                onClick={() => dispatch(deleteContact(item.id))}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};
