import css from "./ContactList.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export const ContactList = ({ contacts, onDeleteContact }) => {
  const handleDelete = (id) => {
    onDeleteContact(id);
  };

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id} className={css.contact}>
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
