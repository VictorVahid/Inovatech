import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/Home/App.jsx'
import { GlobalStyle } from './styles/globalSyles.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <App />
  </StrictMode>,
)
