import { createContext } from 'react'

export const NavContext = createContext({
  navState: false,
  toggleNav: () => {},
})

export default NavContext
