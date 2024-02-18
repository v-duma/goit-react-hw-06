import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addContact, deleteContact } from "../redux/contactsSlice";
import { setFilter } from "../redux/filtersSlice";
import { ContactForm } from "./ContactForm/ContactForm";
import { SearchBox } from "./SearchBox/SearchBox";
import { ContactList } from "./ContactList/ContactList";

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filters.name);

  // Фільтрація контактів за назвою
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  // Завантаження контактів з локального сховища при запуску
  useEffect(() => {
    const initialContacts = JSON.parse(localStorage.getItem("contacts")) || [];
    initialContacts.forEach((contact) => dispatch(addContact(contact)));
  }, [dispatch]);

  const handleAddContact = (contact) => {
    dispatch(addContact(contact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleFilterChange = (event) => {
    dispatch(setFilter(event.target.value));
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm setContacts={handleAddContact} />
      <SearchBox filter={filter} handleFilterChange={handleFilterChange} />

      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;
