import React, { useState } from 'react';
import { Notification } from './MessageNotif/MessageNotif';
import { FeedbackStatistics } from './FeedbackStatistics/FeedbackStatistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { FeedbackSections } from './FeedbackSection/FeedbackSection';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const heandelChangeountTotalFeedback = event => {
    switch (event.target.name) {
      case 'good':
        setGood(prevstate => prevstate + 1);
        break;
      case 'neutral':
        setNeutral(prevstate => prevstate + 1);
        break;
      case 'bad':
        setBad(prevstate => prevstate + 1);
        break;
      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.ceil((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <FeedbackSections title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={heandelChangeountTotalFeedback}
        />
      </FeedbackSections>
      <FeedbackSections title="Statistics">
        {countTotalFeedback() ? (
          <FeedbackStatistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </FeedbackSections>
    </>
  );
};
