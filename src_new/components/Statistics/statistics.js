import React from 'react';
import PropTypes from 'prop-types';
import s from './statistic.module.css';
import Notification from '../Notification/notification';

const Statistics  = ({stats:{good, bad, neutral}}) => {
  const total = bad+neutral+good;
  const positive = Math.round((good/(bad+neutral+good)*100))
  return (
  <>
  <h2>Statistics</h2>
 
 {!total ? (
        <Notification />
      ) : (
        
    <div >
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {positive}%</p> 
    </div>
      )}
  </>
  )}

export default  Statistics;

Statistics.propTypes = {
  stats:PropTypes.object
};
