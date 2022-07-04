import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faHandPointLeft,faLocationDot, faDownLeft ,faEnvelope} from "@fortawesome/free-solid-svg-icons";
import "../../estilos/contacto.css";



export default function Contact() {
  return (
    <div className="contactotodo">
      <div className="cabeza">
           <div className="titulo">
              <p>BOTTEGA LEBARON</p>
            </div>
            <div className="subtitulo">
              <p>COMUNICATE A ESTOS NUMEROS Y ACLARA TUS DUDAS </p>
            </div>

         <div className="icono">
              <Link to="/">
               <h1 style={{fontSize:"4em"}}> <FontAwesomeIcon icon={faHandPointLeft}target="_top" style={{color:"blue", }}/></h1>
              </Link>
        </div>
        <div className="iconoubicacion">
        <Link to="/location">
               <h1 style={{fontSize:"4em"}}> <FontAwesomeIcon icon={faLocationDot}target="_top" style={{color:"blue", }}/></h1>
              </Link>
        </div>
      </div>
            <div className="contactos">
              
              <p>departamentos</p>
            
            </div>

            <div className="departamentos">
              <div className="escuela">
              <p>escuela</p>
              <div className="numeroescuela">
              <p>636 101 79 66</p>
              </div>
              
              </div>
              <div className="administrativo">
              <p>administrativo</p>
              <div className="numeroadmin">
              <p>771 423 84 25</p>
              </div>
              
              </div>
            </div>
              

              <div className="cajacorreos">
                        <div className="titulo">
                          <p>correos</p>
                        </div>
                        <div className="correos">
                        <div className="escuela">
                        adrian@bottega.tech
                        </div>
                        <div className="admin">
                        admin@outlook.es
                        </div>
                        </div>
              </div>

      <div className="iconos">

          <div className="correoescuela">
              <a href="mailto:adrian@bottega.tech?subject=I had a 
              question-suggestion" target="_top"><h1 style={{fontSize:"3.5em"}}> <FontAwesomeIcon icon={faEnvelope}target="_top" style={{color:"blue", }}/></h1></a>
          </div>

          <div className="correoadimin">
              <a href="mailto:adrian@bottega.tech?subject=I had a 
              question-suggestion" target="_top"><h1 style={{fontSize:"3.5em"}}> <FontAwesomeIcon icon={faEnvelope}target="_top" style={{color:"blue", }}/></h1></a>
          </div>
      </div>

      </div>
   
  )
}