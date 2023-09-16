import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { useNavigate } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {handleChangeTheme} = useContext(ContextGlobal)
  const navigate = useNavigate()

  return (
    <nav>
      <button onClick={() => navigate('/home')}>Home</button>
      <button onClick={() => navigate('/contact')}>Contacto</button>
      <button onClick={() => navigate('/favs')}>Favoritos</button>
      <button onClick={() => handleChangeTheme()}>Change theme</button>
    </nav>
  )
}

export default Navbar