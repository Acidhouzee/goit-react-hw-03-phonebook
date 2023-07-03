import React from "react";
import css from '../Contacts/Contacts.module.css';


export const Contacts = ( { contacts, filter, deleteContact } ) => (
    <div className="feedback-options">
        <ul className={css.feedback_options_ul} >
            {contacts
            ?.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()))
            .map((contact, index) => (
                <li className={css.feedback_options_li} key={contact.id}>
                    {contact.name}: {contact.number}
                    <button className={css.feedback_options_li_button} type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
                </li>
            ))}
        </ul>
    </div>   
);