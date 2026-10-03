import React, { Component } from 'react'
import { GEOAPIFY_KEY } from '../utils/chaves'

export default class MeuPonto extends Component {
  state = {
    agora: Date.now()
  }

  timer = null

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        agora: Date.now()
      })
    }, 1000)
  }

  componentWillUnmount() {
    console.log('MeuPonto removido')
    clearInterval(this.timer)
  }

  render() {
    const { latitude, longitude, horarioLocalizacao, onAtualizar } = this.props
    
    const urlMapa = `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=300&center=lonlat:${longitude},${latitude}&zoom=16&marker=lonlat:${longitude},${latitude};color:%23d32f2f;size:48&apiKey=${GEOAPIFY_KEY}`

    const latFormatada = latitude.toFixed(4)
    const lonFormatada = longitude.toFixed(4)

    const hemisferio = latitude < 0 ? 'Hemisfério Sul' : 'Hemisfério Norte'

    const segundosDecorridos = Math.floor((this.state.agora - horarioLocalizacao) / 1000)

    return (
      <div className="flex flex-column align-items-center">
        { }
        <img 
          src={urlMapa} 
          alt="Mapa da sua localização" 
          className="w-full border-round mb-3" 
          style={{ height: '300px', objectFit: 'cover' }}
        />

        { }
        <p className="font-medium text-center mb-2">
          Latitude: {latFormatada} | Longitude: {lonFormatada} — {hemisferio}
        </p>

        { }
        <p className="text-600 text-sm mb-3">
          Localização obtida há {segundosDecorridos} s
        </p>

        { }
        <button 
          onClick={onAtualizar}
          className="p-button p-component p-button-outlined w-full flex align-items-center justify-content-center gap-2"
        >
          <i className="pi pi-refresh"></i>
          <span>Atualizar localização</span>
        </button>
      </div>
    )
  }
}