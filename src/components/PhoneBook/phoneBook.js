import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './phonebook.module.css';

function Phonebook ({handleSubmit, handleChange})  {

    return (
        <div>
        <h2>Phonebook</h2>
         <p>Name</p>
         <div>
         <form onSubmit={handleSubmit}>    
         <input
         type="text"
         onChange={handleChange}  
         name="name"  
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
         required
       />
        <p>Number</p>
       <input
       type="tel"
       name="number"
       onChange={handleChange} 
       pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
       title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
       required
     />
       <button type="submit">Add contact</button>
       </form>
       </div>
       </div>
    )}
  export default  Phonebook;