import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'  // ← changed BrowserRouter to HashRouter
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>  {/* ← removed basename, HashRouter doesn't need it */}
      <App />
    </HashRouter>
  </React.StrictMode>,
)