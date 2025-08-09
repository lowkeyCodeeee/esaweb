import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import  { Home, App } from './App.jsx';



function Hommie () {
  return(<>
  <p>Hello homie</p>
  </>)
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>
)
