import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'
import { useNavigate } from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const {theme, handleChangeTheme} = useContext(ContextGlobal)
  const navigate = useNavigate()

  return (
    <nav className={theme.class}>
      <div className='banner'></div>
      <button className={theme.class} onClick={() => navigate('/Home')}>Home</button>
      <button className={theme.class} onClick={() => navigate('/favs')}>Favoritos</button>
      <button className={theme.class} onClick={() => navigate('/contact')}>Contacto</button>
      <button className={theme.class} onClick={() => handleChangeTheme()}>Change theme</button>
    </nav>
  )
}

export default Navbar