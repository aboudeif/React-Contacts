import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "../css/App.css";
import ContactsList from "./ContactsList";
import CreatContact from "./CreatContact";

const App = () => {
  const removeContact = (contact) => {
    setContacts(contacts.filter((c) => c.id !== contact.id));
  };

  const [contacts, setContacts] = useState(
    [
      {
        id: "karen",
        name: "Karen Isgrigg",
        handle: "karen_isgrigg",
        avatarURL: "http://localhost:5001/karen.jpg",
      },
      {
        id: "richard",
        name: "Richard Kalehoff",
        handle: "richardkalehoff",
        avatarURL: "http://localhost:5001/richard.jpg",
      },
      {
        id: "tyler",
        name: "Tyler McGinnis",
        handle: "tylermcginnis",
        avatarURL: "http://localhost:5001/tyler.jpg",
      },
    ]
  );

  return (
    
      <Routes>
      <Route exact path="/" element={
      <ContactsList
        contacts={contacts}
        onRemoveContact={removeContact}
      />} />
      <Route exact path="/create" element={ <CreatContact />} />
      </Routes>

  );
};

export default App;
