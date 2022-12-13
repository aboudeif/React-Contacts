import { useState } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";

const ContactsList = ({ contacts, onRemoveContact, search }) => {

  const [query, setQuery] = useState("");

  const showContacts =
      query === "" ? contacts : contacts.filter((c) =>
      c.name.toLowerCase().includes(query.toLowerCase()));


  return (
    <div className="contact-list">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          value={query}
          placeholder="Search contacts"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
        />
        
        
      </div>
      <ul className="list-contacts">
      <span className="contact-count">
          {showContacts.length} {showContacts.length === 1 ? "contact" : "contacts"} {showContacts.length === 1 ? "matchs" : "match"} your search
        </span>
        {showContacts.map((contact) => (
          <Contact
            key={contact.id}
            {...contact}
            remove={() => onRemoveContact(contact)}
          />
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
};

export default ContactsList;
