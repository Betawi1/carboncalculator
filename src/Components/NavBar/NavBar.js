import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../images/Kyoto-Web-Logo.png";


function NavBar({ loggedIn }) {
  //Style for navbar links
  const linkStyle = {
    color: "white",
    backgrounColor: "black",
    fontWeight: "bold",
    textDecoration: "none",
  };

  return (
    <div className="navbar-container">



    <div className="navbar=brand">
     <a href="https://www.carbondex.exchange" target="_blank">      
       <img src={logo} height="50" alt="" class="d-inline-block align-middle mr-2"/>
     </a>
   </div>
    
     
     
      <div className="user-info-container">
   
        <h1 id="name-of-app" style={{ color: "black" }}>
         CARBON FOOTPRINT CALCULATOR
        </h1>

      
      </div>


      <div className="nav-buttons">
        <ul>
       
          <li>
            <NavLink
              to="/Estimate"
              style={linkStyle}
              activestyle={{ color: "blue" }}
            >
               
           

            </NavLink>
          </li>
          <li> 
            
      </li>
        </ul>
      </div>

     

    </div>
  );
}

export default NavBar;
