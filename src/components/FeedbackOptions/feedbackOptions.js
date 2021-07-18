import React from 'react';
import s from './feedback.module.css';

  const FeedbackOptions  = ({quantity}) => {
      
    return (
        <div className={s.btn}>
            <button onClick={quantity} className={s.typeFeedback}>good</button>
            <button onClick={quantity} className={s.typeFeedback}>neutral</button>
            <button onClick={quantity} className={s.typeFeedback}>bad</button>
        </div>
    )   
  }
  export default FeedbackOptions;
 