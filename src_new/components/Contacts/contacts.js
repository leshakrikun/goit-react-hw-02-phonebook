import React from 'react';
import s from './contacts.module.css';

const Contacts  = ({state}) => {
     return (
        <ul>Contacts
        {state.map(state =>(
            <li key={state.id}>
                {state.name}:
                {state.number}
            </li>
        ))}
        </ul>
    )}
export default  Contacts;