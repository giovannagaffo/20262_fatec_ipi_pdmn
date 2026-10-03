import React, { Component } from 'react'
import Creditos from './creditos'
import Cartao from './cartao'
import Loading from './Loading'
import MeuPonto from './MeuPonto'
import Busca from './Busca'
import ListaLugares from './Listalugares'
import geoapifyClient from '../utils/geoapifyClient'

export default class App extends Component {
  state = {
    latitude: null,
    longitude: null,
    horarioLocalizacao: null,
    mensagemDeErro: null,
    lugares: null
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
      mensagemDeErro: null,
      lugares: null
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

  onBuscaRealizada = async (categoria, raio) => {
    const { longitude, latitude } = this.state
    try {
      const resposta = await geoapifyClient.get('/places', {
        params: {
          categories: categoria,
          filter: `circle:${longitude},${latitude},${raio}`,
          bias: `proximity:${longitude},${latitude}`,
          limit: 20
        }
      })
      this.setState({ lugares: resposta.data.features })
    } catch (erro) {
      console.error('Erro ao buscar lugares:', erro)
    }
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
      <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '1000px', margin: '0 auto' }}>
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
              <div className="grid">
                <div className="col-12 md:col-6">
                  <Cartao cabecalho="Você está aqui">
                    <MeuPonto 
                      latitude={this.state.latitude}
                      longitude={this.state.longitude}
                      horarioLocalizacao={this.state.horarioLocalizacao}
                      onAtualizar={this.obterLocalizacao}
                    />
                  </Cartao>

                  <div className="mt-4">
                    <Cartao cabecalho="O que você procura?">
                      <Busca onBuscaRealizada={this.onBuscaRealizada} />
                    </Cartao>
                  </div>
                </div>

                <div className="col-12 md:col-6">
                  {
                    this.state.lugares === null ?
                      <div className="text-center text-600 p-5">
                        Nenhuma busca feita ainda.
                      </div>
                    :
                    this.state.lugares.length === 0 ?
                      <div className="text-center text-600 p-5">
                        Nenhum lugar encontrado. Tente aumentar o raio.
                      </div>
                    :
                      <ListaLugares lugares={this.state.lugares} />
                  }
                </div>
              </div>
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