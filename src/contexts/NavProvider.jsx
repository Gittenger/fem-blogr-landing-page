import React, { useState } from 'react'
import { NavContext } from './NavContext'

export const NavProvider = ({ children }) => {
  const [navState, setNavState] = useState(false)
  const toggleNav = () => {
    setNavState(!navState)
  }

  return (
    <NavContext.Provider value={{ navState, toggleNav }}>
      {children}
    </NavContext.Provider>
  )
}

export default NavProvider
