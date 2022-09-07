// import "./Style.css";
import FormData from "./FormData";
// import { useState, useRef } from "react";
import FormRadioButton from "./FormRadioButton";
import FormText from "./FormText";
import "./My.css";
// const FormUi = (id) => {
//   const [valuesForm, setValuesForm] = useState([]);
//   const FormSumbitHandler = (event) => {
//     event.preventDefault();
//     console.log(valuesForm);
//   };
//   const valueChangeHandler = (e) => {
//     const { name, value } = e.target;

//     setValuesForm((prevState) => {
//       {
//         for (var item in prevState) {
//           if (prevState[item].name === name) {
//             prevState[item].value = value;
//             return prevState;
//           }
//         }
//         return [...prevState, { name: name, value: value }];
//       }
//     });
//   };

//   return (
//     <div className="encounterDetails">
//       <div className="formHeading">
//         <h2>View Encounter Details</h2>
//       </div>
//       <div className="heading">
//         <h2>Symptoms</h2>
//         <div className="heading1">
//           <h2>
//             Doctors &<br /> Medicines
//           </h2>
//           <div className="heading2">
//             <h2>
//               Lab &<br /> Parameters
//             </h2>
//             <div className="heading3">
//               <h2>Monitoring</h2>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="symptoms">
//         {FormData.filter(
//           (item) => item.title === "checkbox" && item.category === "symptom"
//         ).map((item) => {
//           return (
//             <FormRadioButton
//               id={item.id}
//               name={item.name}
//               handler={valueChangeHandler}
//             />
//           );
//         })}
//       </div>

//       <div className="medicine">
//         {FormData.filter(
//           (item) =>
//             item.title === "checkbox" && item.category === "doctorsMedicine"
//         ).map((item) => {
//           return (
//             <FormRadioButton
//               id={item.id}
//               name={item.name}
//               handler={valueChangeHandler}
//             />
//           );
//         })}
//       </div>

//       <div className="text">
//         {FormData.filter(
//           (item) =>
//             item.title === "textLabel" && item.category === "labParameter"
//         ).map((item) => {
//           return (
//             <FormText
//               name={item.name}
//               id={item.id}
//               handler={valueChangeHandler}
//             />
//           );
//         })}
//       </div>
//       <div className="text">
//         {FormData.filter(
//           (item) => item.title === "textLabel" && item.category === "monitoring"
//         ).map((item) => {
//           return (
//             <FormText
//               name={item.name}
//               id={item.id}
//               handler={valueChangeHandler}
//             />
//           );
//         })}
//       </div>
//       <button onClick={FormSumbitHandler}>Submit</button>
//     </div>
//   );
// };
// export default FormUi;
import React, { useState } from "react";

function FormUi() {
  const [valuesForm, setValuesForm] = useState([]);
  const FormSumbitHandler = (event) => {
    event.preventDefault();
    console.log(valuesForm);
  };
  const valueChangeHandler = (e) => {
    const { name, value } = e.target;

    setValuesForm((prevState) => {
      {
        for (var item in prevState) {
          if (prevState[item].name === name) {
            prevState[item].value = value;
            return prevState;
          }
        }
        return [...prevState, { name: name, value: value }];
      }
    });
  };
  return (
    <div>
      <div className="formHeading">
        <h2>View Encounter Details</h2>
      </div>
      <hr />
      <div className="Section">
        <h2>Symptoms</h2>
        <div>
          {FormData.filter(
            (item) => item.title === "checkbox" && item.category === "symptom"
          ).map((item) => {
            return (
              <FormRadioButton
                id={item.id}
                name={item.name}
                handler={valueChangeHandler}
              />
            );
          })}
        </div>
      </div>
      <hr></hr>
      <div className="Section">
        <h2>
          Doctors &<br />
          Medicines
        </h2>
        <div>
          {FormData.filter(
            (item) =>
              item.title === "checkbox" && item.category === "doctorsMedicine"
          ).map((item) => {
            return (
              <FormRadioButton
                id={item.id}
                name={item.name}
                handler={valueChangeHandler}
              />
            );
          })}
        </div>
      </div>
      <hr></hr>
      <div className="Section">
        <h2>
          Lab
          <br />
          Parameters
        </h2>{" "}
        <div className="textInput">
          {FormData.filter(
            (item) =>
              item.title === "textLabel" && item.category === "labParameter"
          ).map((item) => {
            return (
              <FormText
                name={item.name}
                id={item.id}
                handler={valueChangeHandler}
              />
            );
          })}
        </div>
      </div>
      <hr></hr>
      <div className="Section">
        <h2>Monitoring</h2>
        <div className="textInput">
          {FormData.filter(
            (item) =>
              item.title === "textLabel" && item.category === "monitoring"
          ).map((item) => {
            return (
              <FormText
                name={item.name}
                id={item.id}
                handler={valueChangeHandler}
              />
            );
          })}
        </div>
      </div>
      <hr></hr>
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
    </div>
  );
}

export default FormUi;
