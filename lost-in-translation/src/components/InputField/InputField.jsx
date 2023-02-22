import { useState } from "react";
import "./InputField.css";


/**
 * A React component that renders an input field with a specific layout, and functionality.
 * @function InputField
 * @param {Object} props - The props object that contains the placeholder text and onSubmit callback function.
 * @param {string} props.placeholder - The placeholder text for the input field.
 * @param {Function} props.onSubmit - The callback function to be called when the user submits the input.
 * @returns {JSX.Element} A React element representing the input field.
 */
function InputField({ placeholder, onSubmit }) {
  const [inputWord, setInputWord] = useState("");
  
  return (
    <div className="InputField">
      <div className="input-field-wrapper">
        <input placeholder={placeholder} maxLength={40} className="input-field" onChange={(event)=>setInputWord(event.target.value)} onKeyDown={(event)=>event.key === "Enter" ? onSubmit(inputWord):null}/>
        <span className="material-symbols-rounded input-field-arrow" onClick={()=>onSubmit(inputWord)}>arrow_forward</span>
      </div>
      <div className="input-field-decorative-line"></div>
    </div>
  );
}

export default InputField;
