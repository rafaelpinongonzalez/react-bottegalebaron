import React from 'react'
import { Link } from 'react-router-dom'

export const Botones = () => {
  return (
      <nav>
      <ol>
      <li>
      <Link exact to="/"activeclassname="active">
       Home
      </Link>

      <Link to="/Acerca" activeclassname="active">
     Acerca
    </Link>

    <Link  to ="/Contacto" activeclassname="active">
    Contacto
   </Link>
      </li>
      </ol>  
      </nav>
  )
}
