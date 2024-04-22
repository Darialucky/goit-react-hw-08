import "./App.css";
import React, { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import initialContacts from "./contacts.json";
import { nanoid } from "nanoid";

export default function App() {
  const [contacts, setContacts] = useState(() => {
    const saveContacts = window.localStorage.getItem("save-contacts");
    if (saveContacts !== null) {
      return JSON.parse(saveContacts);
    } else {
      return initialContacts;
    }
  });
  const [filter, setFilter] = useState("");

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleAddContact = (values) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    setContacts([...contacts, newContact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  useEffect(() => {
    window.localStorage.setItem("save-contacts", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="container">
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filter} onChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
}
