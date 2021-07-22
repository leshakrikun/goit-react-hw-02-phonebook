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
  const {name, value, filter} = e.target
  this.setState({[name]:value});
}

changeFilter = e => {
  this.setState({ filter: e.currentTarget.value });
};

getVisibleTodos = () => {
  const { filter, contacts } = this.state;
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter(todo =>
    todo.name.toLowerCase().includes(normalizedFilter),
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

//******************************************************************* */
deleteTodo = todoId => {
console.log(todoId);
  this.setState(prevState => ({
    
    state: prevState.contacts.filter(state => state.id !== todoId),
  }));
};
//*********************************************************************** */





render() {
  const { filter } = this.state;
  const visibleTodos = this.getVisibleTodos();
    return (
     <>
        <Phonebook state = {this.state.contacts} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts state = {this.state.contacts} todos={visibleTodos} onDeleteTodo={this.deleteTodo}/>
     </>
  )}}