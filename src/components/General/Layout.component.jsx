import React from 'react'
import NavProvider from '../../contexts/NavProvider'
import CIndex from '../components.index.js'

const LayoutStyles = 'layout'

const ContentStyles = 'content'

const Layout = ({ children }) => {
  const { MobileNav } = CIndex
  return (
    <NavProvider>
      <div className={LayoutStyles}>
        <MobileNav />
        <div className={ContentStyles}>{children}</div>
      </div>
    </NavProvider>
  )
}

export default Layout
