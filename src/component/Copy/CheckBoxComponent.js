import React from "react";
import FormRadioButtonCopy from "./FormRadioButtonCopy";

function CheckBoxComponent(props) {
  // console.log(props);
  // console.log(props.options);
  var optionValues = [];
  props.options.forEach((value) => {
    optionValues[value] = false;
  });
  var values = { [props.name]: optionValues };
  // console.log(values);
  const [state, setState] = React.useState(values);
  const checkboxHandler=(e)=>{
    const {name,value,checked}=e.target;
    setState((prevState)=>{
      prevState[name][value]=checked;
    return state
    })
    props.handler(state)
  }
  return (
  <div><FormRadioButtonCopy id={props.id} name={props.name} options={props.options} title={props.title} handler={checkboxHandler}/></div>

  )
}

export default CheckBoxComponent;
