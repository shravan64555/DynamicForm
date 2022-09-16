import React from 'react'
import {FormRadioButton,FormRadioLabel,RadioInput} from '../FormUi-components'
function RadioButtons(props) {

  return (
    <FormRadioButton >
        <RadioInput 
          type={props.title}
          className="checkBoxClass"
          onChange= {props.handler}
          value={props.option}
          name={props.name}
          id={props.option}
        />
        <FormRadioLabel for={props.option} className="checkBoxLabel">
          {props.option}
        </FormRadioLabel>
     
      {/*<div className="RadioCheckBox">
        <input
          type="radio"
          className="checkBoxClass"
          value="no"
          onChange={props.handler}
          name={props.name}
          id="no"
        />
        <label for="no" className="checkBoxLabel">
          No
        </label>
  </div>*/}
    </FormRadioButton>
  )
}

export default RadioButtons