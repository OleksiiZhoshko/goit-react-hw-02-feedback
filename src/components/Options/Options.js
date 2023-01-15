import React from "react";
import PropTypes from 'prop-types';
import css from './Options.module.css'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    // <div className="Counter__boxBattons">
    //     <button
    //         type="button"
    //         className="Counter__batton"
    //         onClick={hendeleGood}
    //     >
    //         Good
    //     </button>
    //     <button
    //         type="button"
    //         className="Counter__batton"
    //         onClick={this.hendeleNeutral}
    //     >
    //         Neutral
    //     </button>
    //     <button
    //         type="button"
    //         className="Counter__batton"
    //         onClick={this.hendeleBad}
    //     >
    //         Bad
    //     </button>
    // </div>
    return (
        <div className={css.box}>
            {options.map((option, id) => (
                <div key={id}>
                    <button onClick={() => onLeaveFeedback(option)}>
                        {option[0].toUpperCase() + option.slice(1, option.length)}
                    </button>
                </div>
            ))}
        </div>
    );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
};

export default FeedbackOptions;