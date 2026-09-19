import React from 'react'
import Busca from "./components/Busca"

export default class App extends React.Component {
  
  onBuscaRealizada = (termoDeBusca) => {
    console.log(termoDeBusca)
  }

  render() {
    return (
      <div className="grid" >
        <div className="col-12">
          <h1>Exibir uma lista...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }
}


//um método que tem como finalidade devolver a jsx e o componente definido por meio de classe: render