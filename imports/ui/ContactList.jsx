import React from "react";
import { ContactsCollection } from "../api/contacts";
import { useTracker } from "meteor/react-meteor-data";

const ContactList = () => {
  const contacts = useTracker(() => ContactsCollection.find({}).fetch());

  return (
    <div>
      <h3>ContactList</h3>
      {contacts.map((con) => (
        <li key={con.email}>
          {con.name} - {con.email}
        </li>
      ))}
    </div>
  );
};

export default ContactList;
