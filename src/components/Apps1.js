import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
export default class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  
 

  addContact = e => {
      console.log("r", e);
    const el = {id: uuidv4(), name: e.target.value, number: '59-12-56'}

    this.setState((state) => {
      [el.name]= e.target.value
      console.log("state rtrgfcg", el);
      return (
        <>{this.state.contacts.push(el)}</>
      )
    })
};
  render() {
       return (
        <>
      <h2>Phonebook</h2>
       <p>Name</p>
       <input
       type="text"
       name="name"
       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
       title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
       required
     />
     <button onClick={this.addContact}>Add contact</button>
      <ul>Contacts
        {this.state.contacts.map(state =>(
            <li key={state.id}>
                {state.name}
            </li>
        ))}
        </ul>
        </>
     )
       }
   }

