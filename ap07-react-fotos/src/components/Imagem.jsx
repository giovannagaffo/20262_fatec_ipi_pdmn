//rafce
import React from 'react'

const Imagem = ({src, alt}) => {
    //const src = props.src 
    //const alt = props.alt
    //const { src, alt } = props //desestruturação
    return (
        <div>
            <img src={src} alt={alt} />
        </div>
    )
}

export default Imagem

