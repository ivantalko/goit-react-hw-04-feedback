import css from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.buttons}>
        {options.map(pop => (
          <button
            key={pop.name}
            name={pop.name}
            type="button"
            onClick={event => onLeaveFeedback(event)}
          >
            {pop.title}
          </button>
        ))}
      </div>
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, title: PropTypes.string })
      .isRequired
  ),
  onLeaveFeedback: PropTypes.func.isRequired,
};
