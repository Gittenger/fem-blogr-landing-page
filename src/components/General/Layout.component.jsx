import React from 'react'

const LayoutStyles = 'layout'

const ContentStyles = 'content'

const Layout = ({ children }) => {
  return (
    <div className={LayoutStyles}>
      <div className={ContentStyles}>{children}</div>
    </div>
  )
}

export default Layout
