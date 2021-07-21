import React from 'react';
import s from './contacts.module.css';

const Contacts  = ({state, handleChange}) => {
     return (
         <>
        <h3>Contacts</h3>
            <p>Find contacts by name</p>
            <input
         type="text"
         onChange={handleChange}  
         name="name"  
         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
         required
       />
            <ul>
        {state.map(state =>(
            <li key={state.id}>
                {state.name}:
                {state.number}
            </li>
        ))}
        </ul>
        </>
    )}
export default  Contacts;