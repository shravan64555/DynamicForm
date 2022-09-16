import React from "react";
import { FormRadioQuestion, FormRadio, Section } from "../FormUi-components";
import RadioButtons from "./RadioButtons";

function FormRadioButtonCopy(props) {
  
  return (
    <FormRadio key={props.id} col={4}>
    <FormRadioQuestion>{props.name}</FormRadioQuestion>
      {props.options.map((item) => {
       
        return (
          <RadioButtons
            handler={props.handler}
            name={props.name}
            option={item}
            title={props.title}
          />
        );
      })}
     {/* <RadioButtons handler={props.handler} name={props.name} /> */}
    </FormRadio>
  );
}

export default FormRadioButtonCopy;
