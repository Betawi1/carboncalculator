import "./App.css"; import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Estimate from "./Components/Emissions/Estimate";


function App() {

  return (
    <div className="App">
      <div className="background"></div>
      <NavBar/>
 <Estimate/>
     

      <Switch>
     
        <Route
          path="/estimate"
          component={() => (
            <Estimate/>
          )}
        />
       
      </Switch>
    </div>
  );
}

export default App;
