import React from 'react'
import Option from './Option'

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3 className='.widget-header__title'>Your option</h3>
                <button
                    onClick={props.handleDeleteOptions}
                    className="button button--link">
                    Remove All
                </button>
            </div>

            {props.options.length === 0 && <p className='widget__message'>Please add an option to get start</p>}
            {
                props.options.map((op, index) =>
                    <Option key={op} 
                    optionText={op} 
                    handleDeleteOption={props.handleDeleteOption} 
                    count ={index+1}/>
                )
            }

        </div>
    )
}
export default Options