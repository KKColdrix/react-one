import React from 'react';
import { Testimonio } from './components/Testimonio';
import './styles/app.css'

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio  
          nombre='Pepe Marquez'
          pais='Mexico'
          imagen='img1'
          puesto='Ingeniero de software'
          empresa='Spotify'
          testimonio='Da miedo cambiar de carrera. Solo gané la confianza de que podía programar 
          trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. 
          Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida.'
        />
        <Testimonio  
          nombre='Daniela Mateos'
          pais='USA'
          imagen='img2'
          puesto='Ingeniero de software'
          empresa='Intel'
          testimonio='freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. 
          El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante 
          total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador
          en una empresa increíble.'
        />
      </div>
    </div>
  )
}

export default App;