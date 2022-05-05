import React from "react";
import { Link } from "react-router-dom";


export default function Contact() {
  return (
    <div>
      <Link to="/" activeclassname="nav-link-active">
        <h1 style={{fontSize:"5em"}}>Back Home</h1>
      </Link>
    </div>
  )
}