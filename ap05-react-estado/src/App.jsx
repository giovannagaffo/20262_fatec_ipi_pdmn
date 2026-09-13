import React from "react"
import EstacaoClimatica from "./EstacaoClimatica"

class App extends React.Component {

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    icone: null,
    mensagemDeErro: null
  }

  componentDidMount() {
    console.log('componenteDidMount')
  }

  componentDidUpdate() {
    console.log('componenteDidUpdate')
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log('render')
    return (
      <div className="container border rounded py-3 mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            {
                this.state.mensagemDeErro ?
                <p className='border rounded p-2 fs-1 text-center'>
                  É preciso dar permissão para acesso à localização. Atualize a página e tente de novo, 
                  ajustando a configuração no seu computador.
                </p>
                :
                  <EstacaoClimatica
                    icone={this.state.icone}
                    estacao={this.state.estacao}
                    latitude={this.state.latitude}
                    longitude={this.state.longitude}
                    mensagemDeErro={this.state.mensagemDeErro}
                    obterLocalizacao={this.obterLocalizacao}
                    root={this.props.root}
                  />
            }
          </div>
        </div>
      </div>
    )
  }

  obterEstacao = (data, latitude) => {
    const anoAtual = data.getFullYear()
    //21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const d4 = new Date(anoAtual, 2, 21)
    const estouNoSul = latitude < 0
    if (data >= d1 && data < d2)
      return estouNoSul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return estouNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estouNoSul ? 'Verão' : 'Primavera'
    return estouNoSul ? 'Outono' : 'Primavera'
  }

  icones = {
    'Primavera': 'seedling',
    'Verão': 'umbrella-beach',
    'Outono': 'tree',
    'Inverno': 'snowman'
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const data = new Date()
        const estacao = this.obterEstacao(data, position.coords.latitude)
        const icone = this.icones[estacao]
        //this.state.latitude = position.coords.latitude não dá pra fazer atribuição, porque a tela não atualiza, não estamos usando direito a variável de estado (não dispara a função render)
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          icone: icone
        })
      },
      (erro) => {
        console.log(`Erro: ${erro}`)
        this.setState({
          mensagemDeErro: 'Tente novamente mais tarde'
        })
      }
    )

  }

}

export default App



/*variável de estado: quando atualizada, ela causa a atualização na tela. Associada a atualização na tela. 
variável comum: quando atualizada, não causa atualiza na tela. 
setState: utilizar estado do componente. */
