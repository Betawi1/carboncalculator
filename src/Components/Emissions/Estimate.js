import React, { useState } from "react";
import FlightForm from "./Flight/FlightForm";
import FlightResults from "./Flight/FlightResults";
import VehicleForm from "./Vehicle/VehicleForm";
import VehicleResults from "./Vehicle/VehicleResults";
import ShippingForm from "./Shipping/ShippingForm";
import ShippingResults from "./Shipping/ShippingResults";
import ElectricityForm from "./Electricity/ElectricityForm";
import ElectricityResults from "./Electricity/Electricity.Results";
import FuelForm from "./Fuel/FuelForm";
import FuelResults from "./Fuel/Fuel.Results";
//import FlightCard from "../UserInfo/FlightCard";
//import VehicleCard from "../UserInfo/VehicleCard";
//import ElectricityCard from "../UserInfo/ElectricityCard";
//import ShippingCard from "../UserInfo/ShippingCard";
//import FuelCard from "../UserInfo/FuelCard";


import "./EmissionPage.css";

function Estimate({
  onSaveFlightData,
  onSaveShippingData,
  onSaveElectricityData,
  onSaveVehicleData,
  onSaveFuelData,
 // onDeleteData,
 // flightHistory,
 // electricityHistory,
 // vehicleHistory,
 // fuelHistory,
 // shippingHistory,
}) {
  const [flightResults, setFlightResults] = useState({
    date: "",
    passengers: "",
    departure: "",
    destination: "",
    carbon_kg: 0,
    id: "",
  });

  const [vehicleResults, setVehicleResults] = useState({
    date: "",
    distance_value: 0,
    distance_unit: "",
    vehicle_make: "",
    vehicle_model: "",
    vehicle_year: "",
    carbon_kg: 0,
    id: "",
  });

  const [shippingResults, setShippingResults] = useState({
    date: "",
    weight: 0,
    distance: 0,
    method: "",
    carbon_kg: 0,
    id: "",
  });

  const [electricityResults, setElectricityResults] = useState({
    date: "",
    country: "",
    state: "",
    electricity_value: "",
    carbon_kg: 0,
    id: "",
  });

  const [fuelResults, setFuelResults] = useState({
    date: "",
    type: "",
    unit: "",
    value: "",
    carbon_kg: 0,
    id: "",
  });




  function handleFlightFormSubmit(formData) {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: `Bearer 55NshTJnqIgD0wWtt246eg`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: "flight",
        passengers: formData.passengers,
        legs: [
          {
            departure_airport: formData.origin,
            destination_airport: formData.destination,
          },
        ],
        distance_unit: "mi",
      }),
    })
      .then((resp) => resp.json())
      .then((flightData) =>
        setFlightResults({
          date: flightData.data.attributes.estimated_at,
          passengers: flightData.data.attributes.passengers,
          departure: flightData.data.attributes.legs[0].departure_airport,
          destination: flightData.data.attributes.legs[0].destination_airport,
          carbon_kg: flightData.data.attributes.carbon_kg,
          id: flightData.data.id,
        })
      )
      .catch((error) => alert(`Please enter valid form data`));
  }

  function handleVehicleFormSubmit(vehicleFormData) {
    console.log(vehicleFormData);
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: "Bearer 55NshTJnqIgD0wWtt246eg",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: "vehicle",
        distance_unit: "km",
        distance_value: vehicleFormData.distance_value,
        vehicle_model_id: vehicleFormData.vehicle_model_id,
      }),
    })
      .then((resp) => resp.json())
      .then((vehicleData) => {
        console.log(vehicleData);

        setVehicleResults({
          date: vehicleData.data.attributes.estimated_at,
          distance_value: vehicleData.data.attributes.distance_value,
          distance_unit: vehicleData.data.attributes.distance_unit,
          vehicle_make: vehicleData.data.attributes.vehicle_make,
          vehicle_model: vehicleData.data.attributes.vehicle_model,
          vehicle_year: vehicleData.data.attributes.vehicle_year,
          carbon_kg: vehicleData.data.attributes.carbon_kg,
          id: vehicleData.data.id,
        });
      })
      .catch((error) => alert(`Please enter valid form data`));
  }

  function handleShippingFormSubmit(shippingData) {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: `Bearer 55NshTJnqIgD0wWtt246eg`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type: "shipping",
        weight_value: shippingData.weight,
        weight_unit: "kg",
        distance_value: shippingData.distance,
        distance_unit: "km",
        transport_method: shippingData.method,
      }),
    })
      .then((resp) => resp.json())
      .then((shippingData) => {
        setShippingResults({
          date: shippingData.data.attributes.estimated_at,
          weight: shippingData.data.attributes.weight_value,
          distance: shippingData.data.attributes.distance_value,
          method: shippingData.data.attributes.transport_method,
          carbon_kg: shippingData.data.attributes.carbon_kg,
          id: shippingData.data.id,
        });
      })
      .catch((error) => alert(`Please enter valid form data`));
  }

  function handleElectricityFormSubmit(elecrticityData) {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: `Bearer 55NshTJnqIgD0wWtt246eg`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: "electricity",
        electricity_unit: "kwh",
        electricity_value: elecrticityData.electricity_value,
        country: elecrticityData.country,
     //   state: elecrticityData.state,
      }),
    })
      .then((resp) => resp.json())
      .then((results) => {
        setElectricityResults({
          date: results.data.attributes.estimated_at,
          country: results.data.attributes.country.toUpperCase(),
        //  state: results.data.attributes.state.toUpperCase(),
          electricity_value: results.data.attributes.electricity_value,
          carbon_kg: results.data.attributes.carbon_kg,
          id: results.data.id,
        });
      })
      .catch((error) => alert(`Please enter valid form data`));
  }

  function handleFuelFormSubmit(fuelData) {
    fetch("https://www.carboninterface.com/api/v1/estimates", {
      method: "POST",

      headers: {
        Authorization: `Bearer 55NshTJnqIgD0wWtt246eg`,
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        type: "fuel_combustion",
        fuel_source_type: fuelData.type,
        fuel_source_unit: fuelData.unit,
        fuel_source_value: fuelData.value,
      }),
    })
      .then((resp) => resp.json())
      .then((fuelData) => {
        setFuelResults({
          date: fuelData.data.attributes.estimated_at,
          type: fuelData.data.attributes.fuel_source_type,
          unit: fuelData.data.attributes.fuel_source_unit,
          value: fuelData.data.attributes.fuel_source_value,
          carbon_kg: fuelData.data.attributes.carbon_kg,
          id: fuelData.data.id,
        });
      })
      .catch((error) => alert(`Please enter valid form data`));
  }


  return (
    <div className="emission-forms-flex">
      <div className="emission-container">
        <div className="popup-container">
          <div className="popup-position">
            {shippingResults.id.length !== 0 ? (
              <ShippingResults
                shippingData={shippingResults}
                onSaveShippingData={onSaveShippingData}
                setShippingResults={setShippingResults}
              />
            ) : null}
          </div>
          <div className="popup-position">
            {vehicleResults.id.length !== 0 ? (
              <VehicleResults
                vehicleData={vehicleResults}
                onSaveVehicleData={onSaveVehicleData}
                setVehicleResults={setVehicleResults}
              />
            ) : null}
          </div>
          <div className="popup-position">
            {flightResults.id.length !== 0 ? (
              <FlightResults
                flightData={flightResults}
                onSaveFlightData={onSaveFlightData}
                setFlightResults={setFlightResults}
              />
            ) : null}
          </div>
          <div className="popup-position">
            {electricityResults.id.length !== 0 ? (
              <ElectricityResults
                electricityData={electricityResults}
                onSaveElectricityData={onSaveElectricityData}
                setElectricityResults={setElectricityResults}
              />
            ) : null}
          </div>
          <div className="popup-position">
            {fuelResults.id.length !== 0 ? (
              <FuelResults
                fuelData={fuelResults}
                onSaveFuelData={onSaveFuelData}
                setFuelResults={setFuelResults}
              />
            ) : null}
          </div>

        </div>
        <div className="all-the-forms">
          
          <div className="emission-welcome-text">
          <h1><bold>CARBON FOOTPRINT CALCULATOR</bold></h1>
          </div>
          
          <div className="form-container">
            <div>
              <div className="airplane"></div>
              <h2>Flights</h2>
              <FlightForm
                handleFormSubmit={handleFlightFormSubmit}
                setFlightResults={setFlightResults}
                flightResults={flightResults}
              />
            </div>
          </div>
          <div className="form-container">
            <div>
              <div className="road"></div>
              <h2>Vehicles</h2>
              <VehicleForm
                handleVehicleFormSubmit={handleVehicleFormSubmit}
                setVehicleResults={setVehicleResults}
                vehicleResults={vehicleResults}
              />
            </div>
          </div>
          <div className="form-container">
            <div>
              <div className="shipping"></div>
              <h2>Shipping</h2>
              <ShippingForm
                handleFormSubmit={handleShippingFormSubmit}
                setShippingResults={setShippingResults}
                shippingResults={shippingResults}
              />
            </div>
          </div>
          <div className="form-container">
            <div>
              <div className="electricity"></div>
              <h2>Electricity</h2>
              <ElectricityForm
                handleFormSubmit={handleElectricityFormSubmit}
                setElectricityResults={setElectricityResults}
                electricityResults={electricityResults}
              />
            </div>
          </div>
          <div className="form-container">
            <div>
              <div className="fuel"></div>
              <h2>Fuel</h2>
              <FuelForm
                handleFormSubmit={handleFuelFormSubmit}
                setFuelResults={setFuelResults}
                fuelResults={fuelResults}
              />
            </div>
          </div>

         <div>
        <iframe width="890" height="700" src="https://old-king-7532.on.fleek.co/cakeform.html" frameborder="0" allowfullscreen></iframe>
        </div>

        </div>
      </div>

    </div>
  );
}

export default Estimate;
