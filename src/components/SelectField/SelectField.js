import React from "react";
import "./SelectField.css";
import { SlArrowDown } from "react-icons/sl";

function SelectField({ label, name, value, onChange, options = [] }) {
  return (
    <div className="field">
      {label && <label>{label}</label>}

      <div className="select-display">
        <select name={name} value={value} onChange={onChange}>
          <option value="">Selecione</option>

          {options.map((op) => (
            <option key={op} value={op}>
              {op}
            </option>
          ))}
        </select>

        <span className="icon-arrow">
          <SlArrowDown />
        </span>
      </div>
    </div>
  );
}

export default SelectField;
