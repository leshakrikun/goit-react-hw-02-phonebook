import React from 'react';
import s from './contacts.module.css';

const Contacts  = ({state, todos, onDeleteTodo}) => {
     return (
         <>
        <ul>
        {todos.map(state =>(
            <li key={state.id}>
                {state.name}:
                {state.number}
                <button
          type="button"
          className="TodoList__btn"
          onClick={() => onDeleteTodo(state.id)}
        >
          Удалить
        </button>
            </li>

        ))}
        </ul>
        </>
    )}
export default  Contacts;