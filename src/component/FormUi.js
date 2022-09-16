import FormData from "./FormData";
import FormRadioButton from "./FormRadioButton";
import FormText from "./FormText";
// import "./My.css";
import { Category, FormTitle, Grid, Section } from "./FormUi-components";
import React, { useState } from "react";
import FormRadioButtonCopy from "./Copy/FormRadioButtonCopy";
import CheckBoxComponent from "./Copy/CheckBoxComponent";

function FormUi() {
  const [valuesForm, setValuesForm] = useState([]);
  const [checkbox, setcheckbox] = useState({});
  const FormSumbitHandler = (event) => {
    event.preventDefault();
    console.log(valuesForm);
    console.log(checkbox)
   
  };
  const CheckBoxHandler=(data)=>{
    var key=Object.keys(data)
    // console.log(Object.keys(data),key)
    setValuesForm((prevState)=>{
      for(let i=0;i<valuesForm.length;i++){
        // console.log(Object.keys(prevState[i]),key)
        // console.log(Object.keys(prevState[i])[0]==key[0])
        if(Object.keys(prevState[i])[0]==key[0]){
          // console.log(prevState[i][key],data[key])
           prevState[i][key]=data[key]
           return prevState
        }
      }
      // console.log(prevState[key])
      return [...prevState,data]
    })
  }
  const valueChangeHandler = (e) => {
    const { name, value} = e.target;

    setValuesForm((prevState) => {
      // prevState.forEach((value,idx)=>{
      //   console.log(value[idx])
      //   if(Object.keys(value)===name){
      //     Object.keys(value)=value
      //   }
      //   console.log(Object.keys(value))
      //   console.log(value)
      // })
      for (var item in prevState) {
        // console.log(prevState[item])
        // console.log(Object.keys(prevState[item]))
        var key=Object.keys(prevState[item])
        console.log(prevState[item][key])
        if (Object.keys(prevState[item]) == name) {
          // console.log(prevState[item][key])
          prevState[item][key] = value;
          return prevState;
        }
      }
      return [...prevState, { [name]:value}];
    });
  };
  return (
    <React.Fragment>
      <FormTitle>View Encounter Details</FormTitle>
      <hr />
      {FormData.map((items) => {
        const key = Object.keys(items);
        return (
          <React.Fragment>
            <Section section>
              <Category>{key}</Category>
              <div>
                {items[key]
                  .filter((item) => item.title === "radio")
                  .map((item) => {
                    return (
                      <FormRadioButtonCopy
                        id={item.id}
                        name={item.name}
                        handler={valueChangeHandler}
                        options={item.options}
                        title={item.title}
                      />
                    );
                  })}
                {items[key]
                  .filter((item) => item.title === "multiple")
                  .map((item) => {
                    return (
                      <FormRadioButtonCopy
                        id={item.id}
                        name={item.name}
                        handler={valueChangeHandler}
                        options={item.options}
                        title="radio"
                      />
                    );
                  })}
                {items[key]
                  .filter((item) => item.title === "checkbox")
                  .map((item) => {
                    return (
                      <CheckBoxComponent
                        id={item.id}
                        name={item.name}
                        handler={CheckBoxHandler}
                        options={item.options}
                        title={item.title}
                      />
                    );
                  })}

                <Grid>
                  {items[key]
                    .filter((item) => item.title === "textLabel")
                    .map((item) => {
                      return (
                        <FormText
                          name={item.name}
                          id={item.id}
                          handler={valueChangeHandler}
                
                        />
                      );
                    })}
                </Grid>
              </div>
            </Section>
            <hr></hr>
          </React.Fragment>
        );
      })}
      <div className="Section">
        <h2>Notes</h2>
        <div className="textArea">
          <textarea
            name="notes"
            placeholder="The person wants more variety in his diet plan include some eggs and bacon"
          />
        </div>
      </div>
      <hr />
      <button onClick={FormSumbitHandler}>Submit</button>
    </React.Fragment>
  );
}

export default FormUi;
