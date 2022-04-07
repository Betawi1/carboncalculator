import "../EmissionPage.css";


function ShippingResults({ shippingData, onSaveShippingData, setShippingResults }) {
  return (
    <div className="emission-popup">
      <h2>Carbon Estimate:</h2>

      <h4>Date: </h4>
      <p>{shippingData.date.slice(0, 10)}</p>

      <h4>Item Weight (kg):</h4>
      <p>{shippingData.weight}</p>

      <h4>Shipment Distance (km):</h4>
      <p>{shippingData.distance}</p>

      <h4>Carbon Estimate (kg): </h4>
      <p>{shippingData.carbon_kg}</p>
      <div>
     
        
        <button className="button-goback" onClick={() => setShippingResults({ ...shippingData, id: "" })}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default ShippingResults;
