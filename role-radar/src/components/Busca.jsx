import React, { Component } from 'react'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
  state = {
    categoria: null,
    raio: '1000',
    erro: null
  }

  static defaultProps = {
    dica: 'Raio em metros (100 a 5000)'
  }

  categorias = [
    { rotulo: 'Cafés', chave: 'catering.cafe' },
    { rotulo: 'Restaurantes', chave: 'catering.restaurant' },
    { rotulo: 'Parques', chave: 'leisure.park' },
    { rotulo: 'Farmácias', chave: 'healthcare.pharmacy' },
    { rotulo: 'Supermercados', chave: 'commercial.supermarket' },
    { rotulo: 'Museus', chave: 'entertainment.museum' }
  ]

  aoSubmeter = (e) => {
    e.preventDefault()
    const { categoria, raio } = this.state

    if (!categoria) {
      this.setState({ erro: 'Escolha uma categoria.' })
      return
    }

    const raioNumero = Number(raio)
    if (!Number.isInteger(raioNumero) || raioNumero < 100 || raioNumero > 5000) {
      this.setState({ erro: 'Informe um raio inteiro entre 100 e 5000 metros.' })
      return
    }

    this.setState({ erro: null })
    this.props.onBuscaRealizada(categoria, raioNumero)
  }

  render() {
    return (
      <form onSubmit={this.aoSubmeter} className="flex flex-column gap-3">
        <div>
          <label className="block font-bold mb-2">Categoria</label>
          <div className="flex flex-wrap gap-2">
            {this.categorias.map((cat) => {
              const selecionada = this.state.categoria === cat.chave
              return (
                <Button
                  key={cat.chave}
                  type="button"
                  label={cat.rotulo}
                  className={`p-button-sm ${selecionada ? 'p-button-primary' : 'p-button-outlined p-button-secondary'}`}
                  onClick={() => this.setState({ categoria: cat.chave })}
                />
              )
            })}
          </div>
        </div>

        <div>
          <label htmlFor="raio" className="block font-bold mb-2">Raio</label>
          <InputText
            id="raio"
            value={this.state.raio}
            onChange={(e) => this.setState({ raio: e.target.value })}
            placeholder={this.props.dica}
            className="w-full"
          />
        </div>

        {this.state.erro && (
          <small className="p-error block">{this.state.erro}</small>
        )}

        <Button
          type="submit"
          label="Buscar"
          icon="pi pi-search"
          className="p-button-success w-full mt-2"
        />
      </form>
    )
  }
}

