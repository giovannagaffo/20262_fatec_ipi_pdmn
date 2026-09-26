import Imagem from './Imagem'
const ListaImagens = ({photos}) => {
  return (
    photos.map((photo, key) => (
        <Imagem 
         key={key}
         src={photo.src.small} 
         alt={photo.alt}/>
    ))
  )
}

export default ListaImagens