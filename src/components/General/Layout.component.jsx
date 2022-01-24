import React from 'react'
import NavProvider from '../../contexts/NavProvider'

const LayoutStyles = 'layout'

const ContentStyles = 'content'

const Layout = ({ children }) => {
  return (
    <NavProvider>
      <div className={LayoutStyles}>
        <div className={ContentStyles}>{children}</div>
      </div>
    </NavProvider>
  )
}

export default Layout
