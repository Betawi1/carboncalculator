import "../EmissionPage.css";

function ElectricityResults({
  electricityData,
  onSaveElectricityData,
  setElectricityResults,
}) {
  return (
    <div className="emission-popup">
      <h2>Carbon Estimate:</h2>

      <h4>Date: </h4>
      <p>{electricityData.date.slice(0, 10)}</p>

      <h4>Country:</h4>
      <p>{electricityData.country}</p>

      <h4>Electricity used:</h4>
      <p>{electricityData.electricity_value}</p>

      <h4>Carbon Estimate (kg): </h4>
      <p>{electricityData.carbon_kg}</p>

      <div>
        

      
        <button
          className="button-goback"
          onClick={() => setElectricityResults({ ...electricityData, id: "" })}
        >
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ElectricityResults;
