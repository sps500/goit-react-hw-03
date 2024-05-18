import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./contactForm/contactForm";
import SearchBox from "./searchBox/searchBox";
import ContactList from "./contactLis/contactList";

export default function App() {
  // Ініціалізація стану з localStorage або з початковим масивом контактів
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
          { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
          { id: "id-3", name: "Eden Clements", number: "645-17-79" },
          { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
        ];
  });

  const [filter, setFilter] = useState("");

  // Використання useEffect для збереження контактів у localStorage при зміні контактів
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleNewUser = (newUser) => {
    const newContact = { id: nanoid(), ...newUser };
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteUser = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const handleFilterChange = (value) => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={handleNewUser} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={handleDeleteUser} />
    </div>
  );
}
