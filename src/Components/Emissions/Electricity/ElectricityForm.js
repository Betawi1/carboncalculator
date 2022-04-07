import { useState } from "react";

import "../EmissionPage.css";

function ElectricityForm({
  handleFormSubmit,
  setElectricityResults,
  electricityResults,
}) {
  const [electricityData, setElectricityData] = useState({
    country: "",
  
    electricity_value: "",
  });

  function onFormSubmit(e) {
    e.preventDefault();
    handleFormSubmit(electricityData);
    setElectricityResults({ ...electricityResults, id: "" });
  }

  function handleElectricityDataChange(e) {
    setElectricityData({
      ...electricityData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="emission-form-container">
      <form onSubmit={onFormSubmit}>
        <div className="form-input">
          <label>Electricity used (kWh):</label>
          <input
            type="text"
            placeholder="Ex: 12.3"
            name="electricity_value"
            onChange={handleElectricityDataChange}
          ></input>
        </div>

      

       

        <div className="form-input">
          <label>Country:</label>
          <select
            name="country"
            id="country"
            onChange={handleElectricityDataChange}
          >
            <option value="Select Country">Select Country</option>
            <option value="US">USA</option>
            <option value="CA">Canada</option>
            <option value="AT">Austria</option>
            <option value="BE">Belgium</option>
            <option value="BG">Bulgaria</option>
            <option value="HR">Croatia</option>
            <option value="CY">Cyprus</option>
            <option value="DK">Denmark</option>
            <option value="EE">Estonia</option>
            <option value="FI">Finland</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="GR">Greece</option>
            <option value="GU">Hungary</option>
            <option value="IE">Ireland</option>
            <option value="IT">Italy</option>
            <option value="LV">Latvia</option>
            <option value="LT">Lithuania</option>
            <option value="LU">Luxembourg</option>
            <option value="MT">Malta</option>
            <option value="NL">Netherlands</option>
            <option value="PL">Poland</option>
            <option value="PT">Portugal</option>
            <option value="RO">Romania</option>
            <option value="SK">Slovakia</option>
            <option value="SI">Slovenia</option>
            <option value="ES">Spain</option>
            <option value="SE">Sweden</option>
            <option value="GB">United Kingdom</option>
            <option value="EU-27">EU-27</option>
            <option value="EU-27+1">EU-27+1</option>
          </select>
        </div>


        <button className="button-estimate" type="submit">Get Carbon Estimate</button>
      </form>

      <div></div>


    </div>




  );
}

export default ElectricityForm;
