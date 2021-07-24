import React from 'react';
import s from './filter.module.css'
const Filter = ({ value, handleChange}) => (
  <>
  <h2>Contacts</h2>
  <label className={s.findcontacts}> 
    Find contacts by name
    <input className={s.findInput} type="text" name="filter" value={value} onChange={handleChange} />
  </label>
  </>
);

export default Filter;