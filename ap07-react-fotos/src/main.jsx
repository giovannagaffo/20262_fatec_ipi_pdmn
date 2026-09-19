import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { PrimeReactProvider } from '@primereact/core'
import Aura from '@primeuix/themes/aura'
import 'primeflex/primeflex.min.css'

const primereact = {
  theme: {
    preset: Aura 
  },
  license: 'eyJpZCI6IjQ0YWQ1ZTIzLTZhYzEtNGRhMS05ODUzLWNhZGViZTAxMjYyYiIsInByb2R1Y3QiOiJwcmltZXVpIiwidGllciI6ImNvbW11bml0eSIsInR5cGUiOiJkZXYiLCJpYXQiOjE3ODk3Nzk4NzAsImV4cCI6MTgyMTMxNTg3MH0.PafwpeugnTV3AI1QKQPFGgzcFUbMrXfMtJDh3H39Eof_rF2fWLKHpGSo7jznfY0YpWLaUR_RcCarO4gy8sqsCg'
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider {...primereact}>
      <App />
    </PrimeReactProvider>
  </StrictMode>,
)
