
import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faHouse,faAddressBook } from "@fortawesome/free-solid-svg-icons";
import "../../estilos/location.css";

export default function Location() {
  return (
    <div className="todolocation">

<div className="cabezalocation">

      <div className="iconubicacion">
              <Link to="/">
              <h1 style={{fontSize:"4em"}}> <FontAwesomeIcon icon={faHouse}target="_top" style={{color:"blue", }}/></h1>
              </Link>
      </div>
      <div className="titulodos">
        <p>LOCATION</p>
        
      </div>
              <div className="iconocontacto">

              <Link to="/contact" activeclassname="nav-contacto">
              <h1 style={{fontSize:"4em"}}> <FontAwesomeIcon icon={faAddressBook}target="_top" style={{color:"blue", }}/></h1>
              </Link>

              </div>
 
</div>
              <div className="ubicacion">
                
                
                
                
              </div>

</div>


  )
}



