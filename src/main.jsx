import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ContextApiProvider } from './context/ContextApi.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextApiProvider>
      <App />
    </ContextApiProvider>
  </StrictMode>,
)
