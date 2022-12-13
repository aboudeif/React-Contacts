import React from 'react'
import Contact from './Contact'

const ContactsList = ({contacts, onRemoveContact}) => {
  return (
    <ul className='contact-list'>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} remove={() => onRemoveContact(contact)} />
      ))}
    </ul>
  )
}

export default ContactsList