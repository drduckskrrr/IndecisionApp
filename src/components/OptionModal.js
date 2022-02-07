import React from "react";
import ReactModal from "react-modal";

const OptionModal = (props) =>{
    return (
        <ReactModal
            isOpen={!!props.selectedOption}
            contentLabel="Selected Option"
            onRequestClose={props.handleClose}
            closeTimeoutMS={200}
            className="modal"
        >
            <h3 className="modal__title">Selected Option</h3> 
            {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
            <button className="button" onClick={props.handleClose}>Okay</button>      
        </ReactModal>
    )
}

export default OptionModal