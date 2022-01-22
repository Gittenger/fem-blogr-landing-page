import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const {} = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center px-5">hello</div>
    </>
  )
}

export default HomePageContent
