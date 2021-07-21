import './App.css';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import Phonebook from './components/PhoneBook/phoneBook';
import Contacts from './components/Contacts/contacts';

let state = {
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

export default function App1() {

 



  const getCurrentFormData = (state) => {
    
    /* this.contacts.push({id: uuidv4(), name: state.name, number: state.number}) */
   
    funk(state.name, state.number)
     }

   const  funk = (qw, wq) => {
    return (
      <>
    {state.contacts.push({id: uuidv4(), name: qw, number: wq})}
    
    </>
    )
     }


  return (
    <>
    <Phonebook onSubmit = {getCurrentFormData} state = {state}/>
    <Contacts state = {state} onSubmit = {getCurrentFormData} /> 
    </>
 )
}




