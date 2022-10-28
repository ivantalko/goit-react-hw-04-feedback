import css from '../FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';
export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <div className={css.containerButtons}>
        {options.map(item => (
          <button
            key={item}
            name={item}
            type="button"
            onClick={onLeaveFeedback}
          >
            {item}
          </button>
        ))}
      </div>
    </>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
