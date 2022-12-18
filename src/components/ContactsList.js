import { useState } from "react";
import Contact from "./Contact";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ContactsList = ({ contacts, onRemoveContact, search }) => {
  const [query, setQuery] = useState("");

  const showContacts =
    query === ""
      ? contacts
      : contacts.filter((c) =>
          c.name.toLowerCase().includes(query.toLowerCase())
        );

  const updateQuery = (update) => setQuery(update);

  const clearQuery = () => updateQuery("");

  return (
    <div className="contact-list">
      <div className="list-contacts-top">
        <input
          className="search-contacts"
          type="text"
          value={query}
          placeholder="Search contacts"
          onChange={(event) => {
            updateQuery(event.target.value);
          }}
        />
        <Link to="/create" className="add-contact">add contact</Link>
      </div>
      <ul className="list-contacts">
        {query ? (
          <div className="showing-contacts">
            <span className="contact-count">
              {showContacts.length}{" "}
              {showContacts.length <= 1 ? "contact" : "contacts"} of{" "}
              {contacts.length}
            </span>{" "}
            <button onClick={clearQuery}>
              Show all
            </button>
          </div>
        ) : null}
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
