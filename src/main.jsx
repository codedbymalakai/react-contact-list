import { StrictMode } from 'react'
// StrictMode is for development only 
// It helps React warn about unsafe lifesycles, depreciated APIS and side effects on ypur components
import { createRoot } from 'react-dom/client'
// Modern way to render React components into the browser
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
