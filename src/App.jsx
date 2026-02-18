import ContactCard from './ContactCard.jsx'
import { useState } from 'react'

export default function App() {

  const contacts = [
    { id: 1, name: "Malakai", email: "malakai@email.com", jobTitle: "Apprentice Dev" },
    { id: 2, name: "Alice", email: "alice@email.com", jobTitle: "Store Assistant" },
    { id: 3, name: "Conor", email: "conor@email.com", jobTitle: "Piano Teacher" }
  ];

  const [searchValue, setSearchValue] = useState('');

  const normalizedSearch = searchValue.toLowerCase();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedSearch) ||
    contact.email.toLowerCase().includes(normalizedSearch)
  );


  return (
    <div>
      <div className="searchBlock">
        <label style={{ display: "block", marginBottom: "5px", marginRight: "10px" }} >Name or Email
          <input
            placeholder='Search contacts...'
            type='text'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </label>

        <p>You typed: {searchValue}</p>
      </div>

      <h1>Contact List</h1>
      <h3
        style={{ padding: "10px" }}
      >Showing {filteredContacts.length} contacts of {contacts.length}:</h3>
      <div className='contactList'>
        {filteredContacts.map(contact => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            jobTitle={contact.jobTitle}
          />
        )
        )}
        {!filteredContacts.length &&
          <p>No contacts found</p>
        }
      </div>
    </div>
  )
}
