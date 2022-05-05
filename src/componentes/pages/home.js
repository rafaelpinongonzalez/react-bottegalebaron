import React from "react";
import NavigationContainer from "../navigation/navigation-container";
import home from "../../estilos/home.css";
export default function() {
  return (
    
      <div className="parte-superior">
        <div className="titulo">
          <p>BOTTEGA LEBARON</p>
        </div>
        <div className="sub-titulo">
          <p>CARRERA TECNICA</p>
        </div>
        <div className="botones">
        <NavigationContainer />
        </div>
      </div>
    
  );
}