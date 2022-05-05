import "./NavBar.css";
import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../../images/carbondex-logo.png";


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
       <img src={logo} height="70" alt="" class="d-inline-block align-middle mr-2"/>
     </a>
   </div>
    

     

    </div>
  );
}

export default NavBar;
