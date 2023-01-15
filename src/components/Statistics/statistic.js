import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({good,neutral,bad,total,positiveFeedback}) => (
  <div className="Statistics">
    {/* <h2 className="Statistics__title">Statistics</h2> */}
    <p className="Statistics__good">God: {good}</p>
    <p className="Statistics__neutral">Neutral: {neutral}</p>
    <p className="Statistics__bad">Bad: {bad}</p>
    <p className='Statistics__total'>Total: {total} </p>
    <p className='Statistics__feadbeck'>Positive feedback: {positiveFeedback}%</p>
  </div>
);

export default Statistics;


Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};