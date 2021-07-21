import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';
export default class App1 extends React.Component {
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

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({[name]:value});
}

handleFilter = () => {
  const { filter, contacts } = this.state;
console.log("fvff", this.state);
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );
};


handleSubmit = e => {
    e.preventDefault();
    const form = e.target 
    this.setState((state) => {
        state.contacts.push({id: uuidv4(), name: state.name, number: state.number})
        form.reset();
      return (
        <></>
      )
    })
};
render() {
  const { name, number, filter } = this.state;
    return (
     <>
        <Phonebook handleSubmit={this.handleSubmit} handleChange={this.handleChange} updateInputNumber={this.updateInputNumber}/>
        <Filter filter={filter} handleChange={this.handleChange} />
        <Contacts state = {this.state.contacts} handleChange={this.handleFilter}/>
     </>
  )}}

