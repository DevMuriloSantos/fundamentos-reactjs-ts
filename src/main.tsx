import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.js'
import './GlobalStyles.css'

createRoot(document.getElementById('root')!).render( // o ! diz que o elemento nao pode ser nulo
  <StrictMode>
    <App />
  </StrictMode>,
)
