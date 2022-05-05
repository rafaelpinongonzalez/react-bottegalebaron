import React from 'react'
import { NavLink } from 'react-router-dom'

export const Botones = () => {
  return (
      <nav>
      <ol>
      <li>
      <NavLink exact to="/"activeClassName="active">
       Home
      </NavLink>

      <NavLink to="/Acerca" activeClassName="active">
     Acerca
    </NavLink>

    <NavLink  to ="/Contacto" activeClassName="active">
    Contacto
   </NavLink>
      </li>
      </ol>  
      </nav>
  )
}
