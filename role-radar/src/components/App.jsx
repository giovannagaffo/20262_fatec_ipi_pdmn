import React, { Component } from 'react'
import Creditos from './creditos'
import Cartao from './cartao'
import Loading from './Loading'
import MeuPonto from './MeuPonto'

export default class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    horarioLocalizacao: null,
    mensagemDeErro: null
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.obterLocalizacao()
  }

  obterLocalizacao = () => {
    this.setState({
      latitude: null,
      longitude: null,
      horarioLocalizacao: null,
      mensagemDeErro: null
    })

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          horarioLocalizacao: Date.now(),
          mensagemDeErro: null
        })
      },
      (erro) => {
        console.log(`Erro: ${erro}`)
        this.setState({
          mensagemDeErro: 'Não foi possível obter sua localização. Libere o acesso no navegador e atualize a página.'
        })
      }
    )
  }

  estilosSubstitulo = {
    textAlign: 'center',
    color: '#666',
    fontSize: '1.2rem',
    marginTop: '10px'
  }

  obterAno = () => {
    return new Date().getFullYear()
  }

  render() {
    console.log('render')
    return (
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
        <h1 className="titulo text-center">
          <i className="pi pi-map-marker mr-2"></i> RolêRadar
        </h1>
        <p style={this.estilosSubstitulo}>Descubra o que existe perto de você</p>
        
        <Creditos />

        <div className="mt-4">
          {
            this.state.mensagemDeErro ?
              <p className='border border-round p-3 text-center text-red-500'>
                {this.state.mensagemDeErro}
              </p>
            :
            !this.state.latitude ?
              <Loading mensagem="Aguardando permissão de localização..." />
            :
              <Cartao cabecalho="Você está aqui">
                <MeuPonto 
                  latitude={this.state.latitude}
                  longitude={this.state.longitude}
                  horarioLocalizacao={this.state.horarioLocalizacao}
                  onAtualizar={this.obterLocalizacao}
                />
              </Cartao>
          }
        </div>

        <hr style={{ margin: '40px 0', border: '0', borderTop: '1px solid #ddd' }} />

        <footer style={{ textAlign: 'center', color: '#888', fontSize: '0.9rem' }}>
          RolêRadar &copy; {this.obterAno()}
        </footer>
      </div>
    )
  }
}