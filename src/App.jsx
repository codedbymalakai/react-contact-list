import ContactCard from './ContactCard.jsx'
import { useState } from 'react'

export default function App() {

  const contacts = [
    { id: 1, name: "Malakai", email: "malakai@email.com", jobTitle: "Apprentice Dev" },
    { id: 2, name: "Alice", email: "alice@email.com", jobTitle: "Store Assistant" },
    { id: 3, name: "Conor", email: "conor@email.com", jobTitle: "Piano Teacher" }
  ];

  const [searchValue, setSearchValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('')
  const [contactList, setContactList] = useState(contacts)

  console.log('Before contactList', contactList)




  const handleSearch = function () {
    setSubmittedValue(searchValue)
    let inputtedValue = ''
    if (typeof searchValue !== 'string') {
      inputtedValue = String(searchValue)
    }
    inputtedValue = searchValue
    const newArr = contacts.filter((contact) =>
      contact.name.toLowerCase().includes(inputtedValue.toLowerCase())
      ||
      contact.email.toLowerCase().includes(inputtedValue.toLowerCase()))

    console.log(newArr)
    setContactList(newArr)
  }



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
          <button onClick={handleSearch}>Search</button>
        </label>

        <p>You typed: {searchValue}</p>
      </div>

      <h1>Contact List</h1>
      <div className='contactList'>
        {contactList.map(contact => (
          <ContactCard
            key={contact.id}
            name={contact.name}
            email={contact.email}
            jobTitle={contact.jobTitle}
          />
        )
        )}
      </div>
    </div>
  )
}
