import { Component } from 'react';
import css from './Feedback.module.css';

export class FeedbackItem extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleClickGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  handleClickneutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  handleClickbad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
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
        <h1 className={css.title}>Please leave feedback</h1>
        <div className={css.buttons}>
          <button
            className={css.btn}
            type="button"
            onClick={this.handleClickGood}
          >
            Good
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={this.handleClickneutral}
          >
            Neutral
          </button>
          <button
            className={css.btn}
            type="button"
            onClick={this.handleClickbad}
          >
            Bad
          </button>
        </div>
        <h2 className={css.title_stats}>Statistics</h2>
        <ul className={css.allres}>
          <li className={css.results}>Good:{this.state.good}</li>
          <li className={css.results}>Neutral:{this.state.neutral}</li>
          <li className={css.results}>Bad:{this.state.bad}</li>
          <li className={css.results}>Total :{this.countTotalFeedback()}</li>
          <li className={css.results}>
            Positive feedback:{this.countPositiveFeedbackPercentage() || 0}%
          </li>
        </ul>
      </>
    );
  }
}
