import React from 'react';
import s from './title.module.css';
import FeedbackOptions from '../FeedbackOptions/feedbackOptions'
import Statistics from '../Statistics/statistics';
  export default class Title extends React.Component {
     state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
    quantity = e => {
        this.setState((state) => {
               return {
                [e.target.textContent]: state[e.target.textContent] + 1   
            }
        })
    }
 render() {
      return (
        <section>
        <h2>Please leave feedback</h2>
        <div>
        <FeedbackOptions quantity = {this.quantity}/>
        <Statistics stats = {this.state}/>
        </div>
        </section>
    )
      }
  }