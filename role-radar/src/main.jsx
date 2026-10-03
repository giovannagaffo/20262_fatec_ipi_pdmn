import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import { PrimeReactProvider } from '@primereact/core'
import Aura from '@primeuix/themes/aura'
import 'primeflex/primeflex.min.css'
import 'primeicons/primeicons.css'
import './styles.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PrimeReactProvider value={{ theme: { preset: Aura } }}>
      <App />
    </PrimeReactProvider>
  </StrictMode>
)