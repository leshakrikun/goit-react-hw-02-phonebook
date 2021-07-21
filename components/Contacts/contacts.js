import React from 'react';
import s from './contacts.module.css';
import App1 from '../../App1'

const Contacts  = ({state:{contacts}}) => {
    console.log(contacts);
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


