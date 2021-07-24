import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';
import Filter from './components/Filter/filter';

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

handleChange = (e) => {
  const {name, value} = e.target
  this.setState({[name]:value});
}

getVisibleContacts = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(cont =>
    cont.name.toLowerCase().includes(normalizedFilter),
  );
};

handleSubmit = e => {
    e.preventDefault();
    const form = e.target 
    const result = this.state.contacts.find( ({ name }) => name === this.state.name );
   
    console.log(this.state.name );
    if(result){
      alert(this.state.name + ` is already in contact`)
    } else {
      this.setState((state) => {
        state.contacts.push({id: uuidv4(), name: state.name, number: state.number})
        return (<></>) 
    })}
    form.reset();  
};


deleteContact = id => {
  this.setState(prevState => ({
      contacts: prevState.contacts.filter(
      state => state.id !== id),
  }));
};

render() {
  const { filter } = this.state;
  const visibleContacts = this.getVisibleContacts();
    return (
     <>
        <Phonebook state = {this.state.contacts} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Filter value={filter} handleChange={this.handleChange} />
        <Contacts contacts={visibleContacts} onDelete={this.deleteContact}/>
     </>
  )}}