import React from 'react'

function FormText(props) {
  return (
    <div className="Input">
      <div className="FormLabel">
        <label for="input">{props.name}</label>
      </div>
      <div className="FormText">
        <input type="text" id="input" onChange={props.handler} name={props.name} />
      </div>
    </div>
  )
}

export default FormText