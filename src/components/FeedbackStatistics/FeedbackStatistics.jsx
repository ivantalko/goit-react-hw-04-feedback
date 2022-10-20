import css from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';
export const FeedbackStatistics = ({
  message,
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return total ? (
    <>
      <ul className={css.allres}>
        <li className={css.results}>Good:{good}</li>
        <li className={css.results}>Neutral:{neutral}</li>
        <li className={css.results}>Bad:{bad}</li>
        <li className={css.results}>Total :{total}</li>
        <li className={css.results}>
          Positive feedback:
          {positivePercentage || 0}%
        </li>
      </ul>
    </>
  ) : (
    <h2>{message}</h2>
  );
};
FeedbackStatistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
