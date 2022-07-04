import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faAddressBook, faLocationDot,faHouseCrack} from "@fortawesome/free-solid-svg-icons"

import "../../estilos/home.css";

export default class NavigationComponent extends Component {
  render() {
    return (

     <div className="links">
     

        <Link to="/contact" activeclassname="nav-contacto">
        <FontAwesomeIcon icon={faAddressBook } style={{color:"gold",}}/>
        </Link>

        <Link to="/location" activeclassname="">
        <FontAwesomeIcon icon={faLocationDot}  style={{color:"gold",}}/>
        </Link>
        
      
      </div>
    );
  }
}