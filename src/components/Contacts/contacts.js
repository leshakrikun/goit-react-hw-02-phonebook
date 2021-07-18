import React from 'react';
import s from './contacts.module.css';

const Contacts  = ({state:{contacts}}) => {
     return (
        <ul>Contacts
        {contacts.map(state =>(
            <li key={state.id}>
                {state.name}:
                {state.number}
            </li>
        ))}
        </ul>
    )}
export default  Contacts;


