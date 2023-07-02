import React, { Component } from "react";
import { nanoid } from "nanoid";
import css from '../Form/Form.module.css';

export class Form extends Component {

    state = {
        name: '',
        number: '',
        id: '',
    };

    handleChangeName = evt => {
        const contactId = nanoid(5);
        this.setState({ name: evt.target.value });
        this.setState({ id: contactId });
    };

    handleChangeNumber = evt => {
        this.setState({ number: evt.target.value });
    };

    handleSubmit = evt => {
        evt.preventDefault();

        this.props.onSubmit(this.state)

        this.reset();
    }

    reset = () => {
        this.setState({name: '', id: '', number: ''});
    }

    render() {
        const { name } = this.state;
        const { number } = this.state;

        return(
            <form className={css.user_form} onSubmit={this.handleSubmit}>
                <label className={css.user_form_label}>
                    Name:
                    <input
                        className={css.user_form_input}
                        type="text"
                        name="name"
                        pattern="^[A-Za-z\u0080-\uFFFF ']+$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleChangeName}
                    />
                </label>
                <label className={css.user_form_label}>
                    Phone:
                    <input
                        className={css.user_form_input}
                        type="tel"
                        name="number"
                        pattern="^(\+?[0-9.\(\)\-\s]*)$"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleChangeNumber}
                    />
                </label>

                <button className={css.user_form_button} type="submit">Add Contact</button>
            </form>
        );
    }
}