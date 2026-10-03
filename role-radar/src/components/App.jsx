import React from 'react'

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
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 className="titulo">RolêRadar</h1>
      <p style={estilosSubstitulo}>Descubra o que existe perto de você</p>

      <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ddd' }} />

      <footer style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
        RolêRadar &copy; {obterAno()}
      </footer>
    </div>
  )
}

export default App