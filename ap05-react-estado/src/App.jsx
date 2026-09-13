import React from 'react'

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null, 
      data: null, 
      icone: null
    }
  }

  render(){
    return (
      <div className="container border rounded py-3 mt-2">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8">

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

  

}

//variável de estado: quando atualizada, ela causa a atualização na tela. Associada a atualização na tela. 
//variável comum: quando atualizada, não causa atualiza na tela. 
// (setState: utilizar estado do componente)