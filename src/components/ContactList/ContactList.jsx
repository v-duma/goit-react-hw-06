import css from "./ContactList.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { deleteContact } from "/src/redux/contactsSlice.js";

export const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <div>
      {contacts.map((contact, index) => (
        <div key={index} className={css.contact}>
          <div className={css.name_number}>
            <p>
              <FaUser />
              {contact.name}
            </p>
            <p>
              <FaPhone />
              {contact.number}
            </p>
          </div>
          <button type="button" onClick={() => handleDelete(contact.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
