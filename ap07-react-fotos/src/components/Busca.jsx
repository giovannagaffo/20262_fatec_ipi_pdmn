// rcc 
import React, { Component } from 'react'
import { Button } from '@primereact/ui/button'
import { Search } from '@primeicons/react/search'
import { IconField } from '@primereact/ui/iconfield'
import { InputText } from '@primereact/ui/inputtext'

export default class Busca extends Component {

    state = {
        termoDeBusca: ''
    }

    onTermoAlterado = (evento) => {
        console.log(evento.target.value)
        //atualizar o estado, para que ele contenha o valor digitado pelo usuário em maiúsculas
        this.setState({ termoDeBusca: evento.target.value})
    }

    onFormSubmit = (evento) => {
        evento.preventDefault()
        this.props.onBuscaRealizada(this.state.termoDeBusca)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <div className='flex flex-column'>
                    <IconField.Root>
                        <IconField.Inset>
                            <Search />
                        </IconField.Inset>
                        <InputText
                            //ajustar o value para que ele exiba o valor trasformado
                            value={this.state.termoDeBusca}
                            pt-root-onChange={this.onTermoAlterado}
                            className="w-full"
                            pt-root-placeholder={this.props.dica} />
                    </IconField.Root>
                    <Button
                        className='mt-3'>
                        OK
                    </Button>
                </div>
            </form>
        )
    }
}

Busca.defaultProps = {
    dica: 'Digite o que deseja ver..'
}

//props: os atributos que o componente vai usar, passar dados de um componente pro outro
//default props: é o valor já acertado/padrão, você especifica fora da classe que define o componente, e acessa a propriedade como um componente javascript