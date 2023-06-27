import React, { Component } from "react";
import { Form } from 'components/Form/Form';
import { Contacts } from 'components/Contacts/Contacts';
import { Filter } from 'components/Filter/Filter';
import '../UserForm/UserForm.css';

export class UserForm extends Component {
    state = {
        contacts: [],
        filter: '',
    }

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        const newContacts = JSON.parse(contacts);
        this.setState({contacts: newContacts});
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.state.contacts !== prevState.contacts) {
            localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
        }
    }

    deleteItem = (id) => {
        const updatedContacts = this.state.contacts.filter(contact => contact.id !== id);
    
        this.setState({ contacts: updatedContacts });
    };

    formSubmitData = data => {
        const existingContact = this.state.contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());

        if (existingContact) {
            alert(`${data.name} is already in contacts!`);
            return;
        }

        this.setState(prevState => {
            return {
              contacts: [...prevState.contacts, data],
            };
        });
    }

    findContact = evt => {
        this.setState({ filter: evt.target.value });
    }

    render() {
        const usersContacts = this.state.contacts;
        const filter = this.state.filter;

        return(
            <div className="form-wrapper">
                <h2>Phonebook</h2>
                <Form onSubmit={this.formSubmitData}></Form>                
                <h2>Contacts</h2>
                <Filter filterName={this.findContact}></Filter>
                <Contacts contacts={usersContacts} filter={filter} deleteContact={this.deleteItem}></Contacts>
            </div>
        );
    }  
}
