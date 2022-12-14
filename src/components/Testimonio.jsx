import React from 'react';


import '../styles/testimonio.css';

export function Testimonio(props) {
  return (
   <div className='contenedor-testimonio'>
    <img 
      className='imagen-testimonio'
      src={require(`../imgs/${props.imagen}.png`)}
      alt='Foto de persona'/>
    <div className='contenedor-texto-testimonio'>
      <p className='nombre-testimonio'><strong>{props.nombre}</strong> en {props.pais}</p>
      <p className='cargo-testimonio'>{props.puesto} en <strong>{props.empresa}</strong></p>
      <p className='texto-testimonio'>{props.testimonio}</p>
    </div>
   </div> 
  )
}

