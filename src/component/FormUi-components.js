import styled from "styled-components";
const FormTitle = styled.h2`
  text-align: center;
  color: aqua;
  height: 20px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
`;
const Section = styled(Div)`
  margin-left: 50px;
`;
const Category = styled.h2`
  min-width: 150px;
  max-width: 150px;
`;
const Grid = styled.div`
position:relative;
  display: grid;
  grid-template-columns: 25% 25%;
  column-gap: 200px;
`;
// const FormInput = styled(Div)`
//   height: 35px;
//   min-width: 300px;
//   justify-content: space-between;
// `;
// const FormInput=styled(Div)`
// margin:5px;
//   display: grid;
//   overflow:hidden;
//   hegiht:30px;
//   grid-template-columns: ${(props) => {
//     // console.log(props.col)
//     let percent= (100/props.col)+'%';
//     // console.log(percent)
//     let gap=''
//     for(let i=0;i<props.col;i++){
//       gap+='20px ' ;
//     }
//     // console.log(gap)
//     return gap
//   }};
//   column-gap: 120px;`
const FormRadio = styled.div`

  margin: 5px;
  display: grid;
  overflow: hidden;
  grid-template-columns: ${(props) => {
    // console.log(props.col)
    let percent = 100 / props.col + "%";
    // console.log(percent)
    let gap = "auto ";
    for (let i = 0; i < props.col - 1; i++) {
      gap += "1fr ";
    }
    // console.log(gap);
    return gap;
  }};

`;
  const FormInput = styled.div`

  display: grid;
  grid-template-columns:1fr 1fr;
  height: 35px;
  min-width: 300px;
 
`;
const FormLabel = styled.label`
  color: gray;
  font-weight: bolder;
`;
const FormInputBox = styled.input`
  border-radius: 10px;
  border: 2px solid gray;
  width: 100px;
  height: 20px;
`;
// const FormRadio = styled(Div)`
//   height: 30px;
//  ${props=>props.css}
// `;
// const FormRadio = styled.div`
//   display: flex;
//   align-items: center;
//   height: 30px;
// `;
const FormRadioQuestion = styled(FormLabel)`
  min-width: 300px;
  max-width: 300px;
`;
const FormRadioLabel = styled.label`
  margin: 5px;
`;
const FormRadioButton = styled(Div)`
  margin-left: 10px;
`;
// const FormRadioDisplay=styled.div`display: grid;
//   overflow:hidden;
//   grid-template-columns: ${(props) => {
//     console.log(props.col)
//     let percent= (100/props.col)+'%';
//     console.log(percent)
//     let gap=''
//     for(let i=0;i<props.col;i++){
//       gap+=percent+' ' ;
//     }
//     console.log(gap)
//     return gap
//   }};
//   column-gap: 200px;`;
const RadioInput = styled.input`
  margin: 0px 20px 0px 5px;
  width: 15px;
  height: 15px;
  ${(props) => {
    if (props.type == "radio") {
      return `&{
            appearance: none;
            border: 1px solid black;
            border-radius: 30px;
            content: none;
            outline: none;
            margin: 0px 20px 0px 5px;
           
          }
            &:checked {
            appearance: none;
            outline: none;
            padding: 0;
            content: none;
            border: none;
            margin: 0px 20px 0px 5px;
          }
          &:checked::before {
            position: absolute;
            color: black !important;
            content: "✓" !important;
            border: 1px solid black;
            border-radius: 30px;
            font-weight: bolder;
            font-size: 13px;
            width: 15px;
            height: 15px;
            text-align:center;
          }
          `;
    }
  }}
`;
// const RadioInput = styled.input`
//   & {
//     appearance: none;
//     border: 1px solid black;
//     border-radius: 30px;
//     width: 15px;
//     height: 15px;
//     content: none;
//     outline: none;
//     margin: 0px 20px 0px 5px;
//   }
//   &:checked {
//     appearance: none;
//     outline: none;
//     padding: 0;
//     content: none;
//     border: none;
//     margin: 0px 20px 0px 5px;
//   }
//   &:checked::before {
//     position: absolute;
//     color: black !important;
//     content: "✓" !important;
//     border: 1px solid black;
//     border-radius: 30px;
//     font-weight: bolder;
//     font-size: 13px;
//     width: 15px;
//     height: 15px;
//   }
// `;

export {
  FormRadioButton,
  FormTitle,
  Section,
  Category,
  Grid,
  FormInput,
  FormLabel,
  FormInputBox,
  FormRadio,
  FormRadioQuestion,
  FormRadioLabel,
  RadioInput,
  // FormRadioDisplay,
};
