import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot,  faHouseCrack, faAddressBook} from "@fortawesome/free-solid-svg-icons";
import Formulario from "../pages/formulario";
import "../../estilos/registro.css";


export default function Registro() {
  return (

<div className="registrotodo">

   <div className="anunciouno"> 
    <p>INICIAMOS EL CURSO EL 29 DE AGOSTO DEL 2022.</p>
    </div>

    <div className="anunciodos">
    <p>CUPO LIMITADO "NO TE QUEDES FUERA" </p>
    </div>
    <div className="iconosbotones">
   <div>
                <Link to="/" activeclassname="casa">
     <FontAwesomeIcon icon={faHouseCrack } style={{color:"gold",}}/>
     </Link>
     </div>
     <div>
     <Link to="/contact" activeclassname="contacto">
        <FontAwesomeIcon icon={faAddressBook } style={{color:"gold",}}/>
        </Link>
        </div>
        <div>
        <Link to="/location" activeclassname="ubicacion">
        <FontAwesomeIcon icon={faLocationDot}  style={{color:"gold",}}/>
        </Link> 
        </div>     
   
   </div>
<div className="datosaspirantes">
<Formulario/>
</div>
   </div>

  )
}






























