import React from 'react'
import Busca from "./components/Busca"
import ListaImagens from './components/ListaImagens'
import PexelsLogo from './components/PexelsLogo'
import pexelsClient from './utils/pexelsClient'

export default class App extends React.Component {

  state = {
    photos : []
  }
  
// onBuscaRealizada = (termoDeBusca) => {
//   this.pexelsClient.photos.search({
//      query: termoDeBusca
//   })
//   .then((result) => {
//      this.setState({photos: result.photos})
//    })
//  }

  onBuscaRealizada = async (termoDeBusca) => {
    const result = await pexelsClient.get('/search', {
      params: {
        query: termoDeBusca
      }
    }) 
    this.setState({photos: result.data.photos})
  }

  render() {
    return (
      <div className="grid" >
        <div className="col-12">
          <PexelsLogo />
        </div>
        <div className="col-12">
          <h1>Exibir uma lista...</h1>
        </div>
        <div className="col-12">
          <Busca onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className='col-12'>
          <ListaImagens photos={this.state.photos}/>
        </div>
      </div>
    )
  }
}


//um método que tem como finalidade devolver a jsx e o componente definido por meio de classe: render
//objeto que representa uma operação assincrona no javascript: promisse.
//Método que aciono em uma promisse para especificar/executar uma função