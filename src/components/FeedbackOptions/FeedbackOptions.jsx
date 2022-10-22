import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.containerButtons}>
        {options.map(item => (
          <button
            key={item.name}
            name={item.name}
            type="button"
            onClick={event => onLeaveFeedback(event)}
          >
            {item.title}
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
