import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AppCopy from './AppCopy.jsx'
//import Enrutado from './Enrutado.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppCopy />
  </StrictMode>,
)
