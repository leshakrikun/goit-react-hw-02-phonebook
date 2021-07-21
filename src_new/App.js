/* import './App.css';
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
  
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log("state 2", [e.target.name]);
  };

  addContact = e => {
    const el = {id: uuidv4(), name: e.target.value, number: '59-12-56'}
    console.log("state 2", el);
    this.setState((state) => {
      [el.name]= e.target.value
      console.log("state 1", el);
      return (
        <>{this.state.contacts.push(el)}</>
      )
    })
};
  render() {
       return (
        <>
      <Phonebook state = {this.state} addContact = {this.addContact}/>
      <Contacts state = {this.state}/>
        </>
     )
       }
   }

/*    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}, */ 