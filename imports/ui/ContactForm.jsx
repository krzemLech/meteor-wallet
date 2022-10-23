import React, { useState } from "react";
import { ContactsCollection } from "../api/contacts";

const ContactForm = () => {
  const [name, setName] = useState("krzem");
  const [email, setEmail] = useState("krzem@mail.com");
  const [url, setUrl] = useState("www.krzem.ev");

  const cleanValues = () => {
    setName("");
    setEmail("");
    setUrl("");
  };

  const saveContact = (e) => {
    e.preventDefault();
    console.log(name, email, url);
    ContactsCollection.insert({ name, email, imageUrl: url });
    cleanValues();
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="imageUrl">Image Url</label>
          <input
            id="imageUrl"
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div>
          <button onClick={saveContact}>Save Contact</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
