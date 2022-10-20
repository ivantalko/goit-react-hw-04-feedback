import css from '../Feedback/Feedback.module.css';
import PropTypes from 'prop-types';
export const FeedbackSections = ({ title, children }) => {
  return (
    <section>
      <h2 className={css.tit}>{title}</h2>
      {children}
    </section>
  );
};
FeedbackSections.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
