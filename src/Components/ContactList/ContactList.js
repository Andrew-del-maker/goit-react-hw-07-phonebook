import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, fetchContacts } from '../../redux/phonebook/phonebook-operation';
import {useEffect} from 'react'

const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.contacts);

  const dispatch = useDispatch();

 useEffect(() => {dispatch(fetchContacts())}, [dispatch])

  
  const getVisibleContacts = (filter, contacts) => {
    
    
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
      );
  }
  
  const visibleContacts = getVisibleContacts(filter, contacts);

  return(
    <ul>
          {visibleContacts.map(({name,id,number}) =>
              <li key={id}>{name} {number}
                  <button type="button" onClick={() => dispatch(deleteContact(id))}>Delete</button>
              </li>
            )}
    </ul>
)}
 

export default ContactList;