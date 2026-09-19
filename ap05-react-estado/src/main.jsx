import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const root = createRoot(document.getElementById('root'))
root.render(
  <App root={root}/>
)

//permitir que o desenvolver encontre bugs em tempo de desenvolvimento, mas faz com que o componente seja construído 2x (StrictMode)
//props: passa o objeto ao app, para que entregue dados a outro componente