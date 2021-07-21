import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './phonebook.module.css';
import App1 from '../../App1'

const initialState = {
  contacts:[],
  name:"",
  number:""
}

export default class Phonebook  extends Component  {
 /*  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  } */
handleChange = (e) => {
  const {name, value} = e.target
  this.setState({[name]:value});
}

handleSubmit = e => {
  e.preventDefault();
  const form = e.target
  
  this.setState((state) => {
    console.log("dsdsqqqqqqqqqqqqqqqqqqqqqqqdddsdsddsd", state);

  
    return (
  this.props.onSubmit(this.state)
    )
  form.reset();
  /* state.contacts.push({id: uuidv4(), name: state.name, number: state.number}) */
  


   })};



 render() {
    /* const {name, number} = this.state.contacts  */
  console.log('render', this.state);
    return (
        <div>
          <h2>Phonebook</h2>
          <p>Name</p>
          <div>
            <form onSubmit={this.handleSubmit}>    
            <input
            type="text" 
            name = "name"
            /* value= {name} */
            onChange={this.handleChange}  
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required/>
            <p>Number</p>
            <input
            type="tel"
            name="number"
            /* value= {number} */
            onChange={this.handleChange}  
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
            <button type="submit">Add contact</button>
            </form>
          </div>
        </div>
    )}}