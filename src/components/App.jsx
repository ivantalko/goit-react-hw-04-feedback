import React from 'react';
import { Notification } from './MessageNotif/MessageNotif';
import { Component } from 'react';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackSections } from './FeedbackSection/FeedbackSection';
export const options = [
  { title: 'Good', name: 'good' },
  { title: 'Neutral', name: 'neutral' },
  { title: 'Bad', name: 'bad' },
];
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  heandelChange = event => {
    const { name } = event.target;
    this.setState(state => {
      return { [name]: state[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.ceil((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    return (
      <>
        <FeedbackSections title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.heandelChange}
          />
        </FeedbackSections>
        <FeedbackSections title="Statistics">
          {this.countTotalFeedback() ? (
            <FeedbackStatistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.neutral}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </FeedbackSections>
      </>
    );
  }
}
