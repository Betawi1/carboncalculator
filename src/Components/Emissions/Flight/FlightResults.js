import "../EmissionPage.css";

function FlightResults({ flightData, onSaveFlightData, setFlightResults }) {
  return (
    <div className="emission-popup">
      <h2>Carbon Estimate:</h2>

      <h4>Date: </h4>
      <p>{flightData.date}</p>

      <h4>Departure:</h4>
      <p>{flightData.departure}</p>

      <h4>Destination:</h4>
      <p>{flightData.destination}</p>

      <h4>Number of Passenger: </h4>
      <p>{flightData.passengers}</p>

      <h4>Carbon Estimate (kg): </h4>
      <p>{flightData.carbon_kg}</p>

      <div>
      
        <button className="button-goback" onClick={() => setFlightResults({ ...flightData, id: "" })}>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default FlightResults;
