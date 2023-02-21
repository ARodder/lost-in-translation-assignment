import { useState } from "react";
import "./InputField.css";

function InputField({ placeholder, onSubmit }) {
  const [inputWord, setInputWord] = useState("");
  return (
    <div className="InputField">
      <div className="input-field-wrapper">
        <input placeholder={placeholder} className="input-field" onChange={(event)=>setInputWord(event.target.value)}/>
        <span className="material-symbols-rounded input-field-arrow" onClick={()=>onSubmit(inputWord)}>arrow_forward</span>
      </div>
      <div className="input-field-decorative-line"></div>
    </div>
  );
}

export default InputField;
