import React from 'react'
import { Link } from 'react-router-dom'

const CreatContact = () => {
  return (
    <>
    <Link to="/" className="close-create-contact">Close</Link>
    <form className="create-contact-form">
      <div className="create-contact-details">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="handle" placeholder="Handle" />
        <input type="text" name="avatarURL" placeholder="Avatar URL" />
        <button>Add Contact</button>
      </div>
    </form>
    </>
  )
}

export default CreatContact