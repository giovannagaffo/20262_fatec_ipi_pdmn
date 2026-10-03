import React from 'react'
import Creditos from './creditos'
import Cartao from './cartao'

const App = () => {
  const estilosSubstitulo = {
    textAlign: 'center',
    color: '#666',
    fontSize: '1.2rem',
    marginTop: '10px'
  }

  const obterAno = () => {
    return new Date().getFullYear()
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <h1 className="titulo text-center">
        <i className="pi pi-map-marker mr-2"></i> RolêRadar
      </h1>
      <p style={estilosSubstitulo}>Descubra o que existe perto de você</p>
      
      {/* Créditos logo abaixo do subtítulo */}
      <Creditos />

      <div className="mt-4">
        <Cartao cabecalho="Teste">
          <p>Conteúdo do cartão</p>
        </Cartao>
      </div>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ddd' }} />

      <footer style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
        RolêRadar &copy; {obterAno()}
      </footer>
    </div>
  )
}

export default App