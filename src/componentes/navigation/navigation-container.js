import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faAddressBook, faLocationDot} from "@fortawesome/free-solid-svg-icons"

import "../../estilos/home.css";




export default class NavigationComponent extends Component {
  render() {
    return (
      <div className="parte-superior">
        <div className="titulo">
          <p>BOTTEGA LEBARON</p>
        </div>
        <div className="sub-titulo">
          <p>CARRERA TECNICA</p>
        </div>
        <Link to="/contact" activeclassname="nav-link-active">
        <FontAwesomeIcon icon={faAddressBook}/>
        </Link>

        <Link to="/location" activeclassname="nav-link-active">
        <FontAwesomeIcon icon={faLocationDot}/>
        </Link>
        {/* {false ? <button>Add Blog</button> : null} */}
      </div>
    );
  }
}