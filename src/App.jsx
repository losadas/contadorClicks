import './App.css'
import { useState } from 'react'
import frecodecamplogo from './images/logofrecodecamp.png'
import Boton from './components/Boton'
import Contador from './components/Contador'
function App() {
  
  const [numclicks, setNumclicks] = useState(0)
  const manejarClick = () => {
    setNumclicks(numclicks+1)
  }

  const resetContador = () => {
    setNumclicks(0)
  }

  return (
    <div className='App'>
      <div className='logocode-contenedor'>
        <img className='logo' src={frecodecamplogo} alt='logo de frecodecamp' />
      </div>
      <div className='contenedor-principal' >
        <Contador 
          numclicks={ numclicks }
        />
        <Boton 
          text='Click'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          text='Reset'
          esBotonClick={false}
          manejarClick={resetContador}
        />
      </div>
    </div>
  )
}

export default App
