import "../EmissionPage.css";


function FuelResults({ fuelData, onSaveFuelData, setFuelResults }) {
  return (
    <div className="emission-popup">
      <h2>Carbon Estimate:</h2>

      <h4>Date: </h4>
      <p>{fuelData.date.slice(0, 10)}</p>

      <h4>Fuel Type:</h4>
      <p>{fuelData.type}</p>

      <h4>Fuel Unit:</h4>
      <p>{fuelData.unit}</p>

      <h4>Fuel Used:</h4>
      <p>{fuelData.value}</p>

      <h4>Carbon Estimate (kg): </h4>
      <p>{fuelData.carbon_kg}</p>
      <div>
        
        <button className="button-goback" onClick={() => setFuelResults({ ...fuelData, id: "" })}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default FuelResults;
