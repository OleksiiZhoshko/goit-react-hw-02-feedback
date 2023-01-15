import React from 'react';
import './FeedbackCounter.css';
import Statistics from '../Statistics/statistic.js';
import FeedbackOptions from '../Options/Options.js';
import Section from '../SectionTitle/SectionTitle';
import Notification from 'components/Notifications/Notifications';

class Counter extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //   hendeleGood = () => {
  //     this.setState(stateGood => {
  //       return {
  //         good: stateGood.good + 1,
  //       };
  //     });
  //   };
  //   hendeleNeutral = () => {
  //     this.setState(stateNeutral => {
  //       return {
  //         neutral: stateNeutral.neutral + 1,
  //       };
  //     });
  //   };
  //   hendeleBad = () => {
  //     this.setState(stateBad => {
  //       return {
  //         bad: stateBad.bad + 1,
  //       };
  //     });
  //   };

  onLeaveFeedback = option => {
    this.setState({ [option]: this.state[option] + 1 });
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((value, total) => (total += value), 0);

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback() || 0);
  };

  render() {
    const options = Object.keys(this.state);

    return (
      <div className="Counter">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {!this.countTotalFeedback() ? (
          <Notification message="There is no feedback"></Notification>
        ) : (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default Counter;
