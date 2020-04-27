import React from 'react';
import Model from 'react-modal';

const OptionModal = (props) => (
    // console.log("This is the Option Modal Props", props);

    <Model
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearSelectedOption}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
        <button className="button" onClick={props.handleClearSelectedOption}>Okay</button>
    </Model>
);

export default OptionModal;

// Create a new event handle in IndecisionApp that clears selectedOption State
// Pass that in OptionModal
// Call it on button click