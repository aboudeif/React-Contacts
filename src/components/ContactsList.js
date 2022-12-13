import React from 'react'
import Contact from './Contact'
import PropTypes from 'prop-types'

const ContactsList = ({ contacts, onRemoveContact }) => {
  return (
    <ul className='contact-list'>
      {contacts.map((contact) => (
        <Contact key={contact.id} {...contact} remove={() => onRemoveContact(contact)} />
      ))}
    </ul>
  )
}

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveContact: PropTypes.func.isRequired,
}

export default ContactsList