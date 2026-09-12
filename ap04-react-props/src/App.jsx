import Pedido from "./Pedido.jsx"
import Cartao from "./Cartao.jsx"
import Feedback from "./Feedback.jsx"
const App = () => {
  const textoOK = "Já chegou"
  const textoNOK = "Não chegou ainda"
  const funcaoOK = () => alert("Agradecemos o feedback")
  const funcaoNOK = () => alert("Verificaremos")
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}
      />
  )
  return (
    <div className="container border mt-0">
      <div className="row">
        <div className="col 12">
          <i className="fa-solid fa-hippo"></i>
        </div>
      </div>
      <div className="row">
        {/*mobile first*/}
        <div className="col-12 col-lg-6 col-xxl-3">
            <Cartao
              cabecalho="22/04/2026">
              <Pedido 
                icone="fa-solid fa-hdd fa-2x"
                titulo="SSD"
                descricao="Um SDD de 1Tb"/>
              {componenteFeedback}
            </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="23/04/2026">
            <Pedido 
              icone="fa-solid fa-dog fa-2x"
              titulo="Cachorro"
              descricao="Um filhote de cachorro"/>
            {componenteFeedback}
          </Cartao>
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Cartao
            cabecalho="22/04/2026">
            <Pedido 
              icone="fa-solid fa-book fa-2x"
              titulo="Livro"
              descricao="Concrete Maths"/>
            {componenteFeedback}
          </Cartao>
        </div>
          <div className="col-12 col-lg-6 col-xxl-3">
            <Cartao
              cabecalho="23/04/2026">
              <Pedido 
                icone="fa-solid fa-camera fa-2x"
                titulo="Câmera"
                descricao="Câmera 12Mpixels"/>
              {componenteFeedback}
            </Cartao>
        </div>
      </div>
    </div>
  )
}

export default App