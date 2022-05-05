import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{faAddressBook, faBell, faLocationDot} from "@fortawesome/free-solid-svg-icons"



export default class NavigationComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="nav-links">
        {/* <NavLink exact to="/" activeClassName="nav-link-active">
       
        </NavLink> */}
        <NavLink to="/contact" activeClassName="nav-link-active">
        <FontAwesomeIcon icon={faAddressBook}/>
        </NavLink>

        <NavLink to="/location" activeClassName="nav-link-active">
        <FontAwesomeIcon icon={faLocationDot}/>
        </NavLink>
        {/* {false ? <button>Add Blog</button> : null} */}
      </div>
    );
  }
}