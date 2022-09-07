import React from 'react'

function FormRadioButton(props) {
  return (
    <div key={props.id} className="Radio">
    <div className="RadioTitle">
      <p>{props.name}</p>
    </div>
    <div className="RadioButton">
      <div className="RadioCheckBox">
        <input
          type="radio"
          className="checkBoxClass"
          onChange={props.handler}
          value="yes"
          name={props.name}
          id="yes"
        />
        <label for="yes" className="checkBoxLabel">
          Yes
        </label>
      </div>
      <div className="RadioCheckBox">
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
      </div>
    </div>
  </div>
  )
}

export default FormRadioButton