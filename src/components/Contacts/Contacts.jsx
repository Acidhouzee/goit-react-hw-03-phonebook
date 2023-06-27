import React from "react";
import '../Contacts/Contacts.css';


export const Contacts = ( { contacts, filter, deleteContact } ) => (
    <div className="feedback-options">
        <ul>
            {contacts
            ?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
            .map((contact, index) => (
                <li key={index} id={contact.id}>
                    {contact.name}: {contact.number}
                    <button type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>   
);