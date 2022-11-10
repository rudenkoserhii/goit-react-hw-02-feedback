import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = (option) => {
    this.setState(prevState => ({[option]: prevState[option] + 1,}));
  }


  countTotalFeedback = () => {
    return (this.total = this.state.good + this.state.neutral + this.state.bad)}

  countPositiveFeedbackPercentage = () => {
  return ((this.total > 0)?(this.positiveFeedback = ( Math.ceil((this.state.good / this.total ) * 100 ))):0)
  }

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={(e) => this.onLeaveFeedback(e.target.textContent)}/>      
        </Section>
        <Section title={'Statistic'}>
          {(Object.values(this.state).some(value => value > 0))?
            <Statistics good={this.state.good} 
                        neutral={this.state.neutral} 
                        bad={this.state.bad} 
                        total={this.countTotalFeedback()} 
                        positivePercentage={this.countPositiveFeedbackPercentage()}/>:
            <Notification message="There is no feedback"></Notification>}
        </Section>
      </div>
  )}
}
