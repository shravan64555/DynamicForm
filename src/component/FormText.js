import React from 'react';
import {FormInput, FormLabel,FormInputBox,Section} from './FormUi-components';

function FormText(props) {
  return (
    <FormInput >
        <FormLabel>{props.name}</FormLabel>
      <FormInputBox type="input" name={props.name} onChange={props.handler} />
    </FormInput>
  )
}

export default FormText