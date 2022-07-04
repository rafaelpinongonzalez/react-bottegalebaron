import React from "react";
import NavigationContainer from "../navigation/navigation-container";
import { Link } from "react-router-dom"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import todos from '../../assets/img/todos.png';
import viejos from '../../assets/img/viejos.png';
import certificados from '../../assets/img/certificados.png';
import ReactPlayer from "react-player";

// video https://www.youtube.com/watch?v=NfDTO4c0xLc


export default function Home() {
  return (
<div className="home">
    <div className="parte-superior">
            <div className="titulo">
              <p>BOTTEGA LEBARON</p>
            </div>
            <div className="sub-titulo">
              <p>CARRERA TECNICA</p>
            </div>
            <NavigationContainer/>
    </div>

    <div className="medio">
        <div className="plus">

            <div className="uno">
              <p>Escuela Certificada</p>
            </div>

            <div className="dos">
              <p>Clases Presenciales</p>
            </div>

            <div className="tres">
              <p>Trabajo</p>
            </div>
        </div>
    </div>
      
      
  <div className="face-registro-wats">
          <div className="facebook">
          <a href="https://www.facebook.com/Bottega-Tech-106580435336757">
            <FontAwesomeIcon icon={faFacebookSquare}target="_top" style={{color:"blue", }}/>
            </a>
          </div>

          <div className="boton-registro">
                      <Link to="registro">
                      <button>Registrate</button>
                    </Link>
          </div>

          <div className="whatsapp">
                    <Link to="api.whatsapp.com/send?phone=18018353995">
            <FontAwesomeIcon icon={faWhatsapp }target="_top" style={{color:"35F905",}}/>
            </Link>
          </div>

  </div>
<div className="parte-imagenes-textos">
      <div className="imagentextouno">
            <div className="imguno">
              <img src={todos}/>
          </div>

          <div className="textuno">
            <ul>
            <h1>Escuela</h1>
              <li>Curso Intensivo De Tres Meses</li>
              <li>Aprende Desde Cero o Referza Tus Conocimientos</li>
              <li>Clases en español e ingles</li>
              <li>Escuela Certificada</li>
              <li>Al terminar tus estudios te damos trabajo</li>
              <li>Oportunidad de crecimiento</li>
              <li>Negociacion de pagos para tu carrera</li>
              </ul>
              
          </div>
      </div>
  <div className="imagetextdos">
          <div className="textdos">
             <ul>
               <h1>Materias-Temas</h1>
              <li>Introduccion a la Carrera Tecnica</li>
              <li>Manejo de Sistema Computacional</li>
              <li>Descripción general de la aplicación de soporte de Bottega</li>
              <li>Fundamentos de HTML y CSS</li>
              <li>JavaScript</li>
              <li>Python</li>
              <li>Github</li>
              <li>UML</li>
              <li>React</li>
              </ul>
            </div>
          <div className="imgdos">
              <img src={viejos}/>
           </div>
  </div>

  <div className="imagetextres">
    <div className="imgtres">
    <img src={certificados}/>
    </div>
    <div className="textres">
    <ul>
               <h1>Requisitos</h1>
              <li>Ser mayor de 15 años</li>
              <li>Responsable</li>
              <li>Firmar Contrato o Acuerdo De Pago Apartir De Las Dos Semanas De Prueba</li>
              <li>Firma De Reglamento De Escuela y Clases</li>
              <li>Traer Tu Propia Laptop o Comptadora De Escritorio</li>
              </ul>
    </div>
  </div>
  

</div>
<div className="video">
<ReactPlayer
url='https://youtu.be/XO3oXngKjfs'

/>
<ReactPlayer
url='https://www.youtube.com/watch?v=IuUj7p7wgik&t=4s'
/>
</div>
    
</div>
  );
}