import { useState } from "react";


function FuelForm({
  handleFormSubmit,
  setFuelResults,
  fuelResults,
}) {
  const [fuelData, setFuelData] = useState({
    type: "",
    unit: "",
    value: "",
  });

  function handleFuelDataChange(e) {
    setFuelData({
      ...fuelData,
      [e.target.name]: e.target.value,
    });
  }

  function onFormSubmit(e) {
    e.preventDefault();
    handleFormSubmit(fuelData);
    setFuelResults({ ...fuelResults, id: "" });
  }

  return (


<div className="emission-form-container">
<form onSubmit={onFormSubmit}>

    <div className="form-input">
          <label>Fuel Type:</label>
          <select
            name="type"
            id="type"
            onChange={handleFuelDataChange}
          >
            <option value="select Fuel Type">Select Fuel Type</option>
            <option value="bit">Bituminous Coal</option>
            <option value="dfo">Home Heating and Diesel Fuel</option>
            <option value="jf">Jet Fuel</option>
            <option value="ker">Kerosene</option>
            <option value="lig">Lignite Coal</option>
            <option value="msw">Municipal Solid Waste</option>
            <option value="ng">Natural Gas</option>
            <option value="pc">Petroleum Coke</option>
            <option value="pg">Propane Gas</option>
            <option value="sub">Subbituminous Coal</option>
            <option value="tdf">Tire-Derived Fuel</option>
            <option value="wo">Waste Oil</option>
          </select>
        </div>

        <div className="form-input">
          <label>Fuel Unit:</label>
          <select
            name="unit"
            id="unit"
            onChange={handleFuelDataChange}
          >
            <option value="Select Fuel Unit">Select Fuel Unit</option>
            <option value="btu">BTU</option>
            <option value="gallon">Gallon</option>
            <option value="short_ton">Short Ton</option>
            <option value="thousand_cubic_feet">MCF</option>
            <option value="barrel">Barrel</option>
          </select>
        </div>


      

  <div className="form-input">
    <label>Fuel used:</label>
    <input
      type="text"
      placeholder="Ex: 100"
      name="value"
      onChange={handleFuelDataChange}
    ></input>
  </div>


  <button className="button-estimate" type="submit">Get Carbon Estimate</button>
        <br/>
        <br/>
        <h6><small>Scroll up to see estimate</small></h6>

      </form>

      </div>

  );
}

export default FuelForm;
