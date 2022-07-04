import React, { Component } from 'react'
// import React, {useState,useRef} from 'react';
import { Link } from "react-router-dom";

export default class formulario extends Component {

    // Constructor(props){
    //     super(props);
    //     this.nombre = React.createRef();
    //     this.correo = React.createRef();
    // }
        // Inputs no controlados, obteniendo datos a través de Refs
        clicRefs (evento){
          evento.preventDefault();
          console.log(this.nombre.current.value);
          console.log(this.correo.current.value);
        }

        clicEventos(evento){
          evento.preventDefault();
          console.log(evento.target[0].value)
          console.log(evento.target[1].value)

        }

render(){
return(
<form onSubmit={this.clicEventos}>
<h1>{"Formularios EWebik"}</h1>
<input type="text" placeholder="Nombre" />
<input type="text" placeholder="Correo"/>
<button>
Enviar
</button>
</form>
    )
  }
}
    
  




















































// {/* https://www.youtube.com/watch?v=Or0rljWUyEM */}

// // https://github.com/EWebik/react-js/tree/formularios/src