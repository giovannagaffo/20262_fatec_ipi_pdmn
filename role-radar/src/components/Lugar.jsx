import React from 'react'
import Cartao from './cartao'

const formatarDistancia = (distancia) => {
  if (distancia < 1000) {
    return `${Math.round(distancia)} m`
  }
  return `${(distancia / 1000).toFixed(1).replace('.', ',')} km`
}

const estilosCirculo = {
  width: '30px',
  height: '30px',
  borderRadius: '50%',
  backgroundColor: '#007ad9',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: 'bold',
  marginRight: '10px',
  flexShrink: 0
}

export default function Lugar({ numero, nome, endereco, distancia }) {
  return (
    <div className="mb-3">
      <Cartao cabecalho={`a ${formatarDistancia(distancia)}`}>
        <div className="flex align-items-center">
          <div style={estilosCirculo}>
            {numero}
          </div>
          <div>
            <div className="font-bold text-900">
              {nome || 'Sem nome'}
            </div>
            <div className="text-600 text-sm mt-1">
              {endereco}
            </div>
          </div>
        </div>
      </Cartao>
    </div>
  )
}