import "./InputField.css";

function InputField({ placeholder, onChange }) {
  return (
    <div className="InputField">
      <div className="input-field-wrapper">
        <input placeholder={placeholder} className="input-field" onChange={onChange}/>
        <span class="material-symbols-rounded input-field-arrow">arrow_forward</span>
      </div>
      <div className="input-field-decorative-line"></div>
    </div>
  );
}

export default InputField;
