import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import TokenAuth from '../context/TokenAuth.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<TokenAuth>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  
</TokenAuth>  
</React.StrictMode>,
)
