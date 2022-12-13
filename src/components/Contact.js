import React from "react";

const Contact = ({ name, handle, avatarURL, remove }) => {
  return (
    <li className="contact-list-item">
      <div
        className="contact-avatar"
        style={{
          backgroundImage: `url(${avatarURL})`,
        }}
      ></div>
      <div className="contact-details">
        <p>{name}</p>
        <p>{handle}</p>
      </div>
      <button className="contact-remove" onClick={remove}>Remove</button>
    </li>
  );
};

export default Contact;
