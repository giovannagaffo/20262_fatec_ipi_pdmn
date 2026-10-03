import React from 'react'
import Lugar from './Lugar'

export default function ListaLugares({ lugares }) {
  return (
    <div>
      {lugares.map((lugar, index) => {
        const propriedades = lugar.properties
        return (
          <Lugar 
            key={propiedades.place_id}
            numero={index + 1}
            nome={propiedades.name}
            endereco={propiedades.address_line2}
            distancia={propiedades.distance}
          />
        )
      })}
    </div>
  )
}