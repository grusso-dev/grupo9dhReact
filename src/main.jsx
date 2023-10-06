import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Generos } from './components/generos/generos.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
     <App />
     {/* <Generos></Generos> */}
    </>
  </React.StrictMode>,
)
