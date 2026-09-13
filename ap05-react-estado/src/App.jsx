import React from "react"

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null, 
      data: null, 
      icone: null,
      mensagemDeErro: null
    }
  }

  render(){
    return (
      <div className="container border rounded py-3 mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">
            <div className="card">
              <div className="card-body">
                <div
                  style={{height: '6rem'}}
                  className="d-flex align-items-center border rounded mb-2">
                    <i className={`fa-solid fa-${this.state.icone}`}></i>
                    <p className="w-75 ms-3 text-center fs-1">
                      {this.state.estacao}
                    </p>
                </div> 
                <div>
                  <p className="text-center">
                    {
                      this.state.latitude ? 
                        `Coordenadas: ${this.state.latitude}, ${this.state.longitude}.
                        Data: ${this.state.data}.` 
                      :
                        this.state.mensagemDeErro ? 
                        `${this.state.mensagemDeErro}`
                      :
                        `Clique no botão para saber a sua estação climática`
                    }
                  </p>
                </div>
                <button
                  onClick={this.obterLocalizacao}
                  className="btn btn-outline-primary w-100 mt-2">
                    Qual a minha estação? 
                  </button>
              </div>
            </div>
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
    if(data >= d1 && data < d2)
      return estouNoSul ? 'Inverno' : 'Verão'
    if (data >= d2 && data < d3)
      return estouNoSul ? 'Primavera' : 'Outono'
    if (data >= d3 || data < d4)
      return estouNoSul ? 'Verão' : 'Primavera'
    return estouNoSul ? 'Outono' : 'Primavera'
  }

  icones = {
    'Primavera' : 'seedling',
    'Verão' : 'umbrella-beach',
    'Outono' : 'tree',
    'Inverno' : 'snowman'
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
            data: data.toLocaleTimeString(),
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
