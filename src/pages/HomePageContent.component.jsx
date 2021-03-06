import React, { useEffect } from 'react'

import CIndex from '../components/components.index.js'

const HomePageContent = () => {
  const { Header, SectionOne, SectionTwo, SectionThree, Footer } = CIndex

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <div className="w-full grid justify-items-center">
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <Footer />
      </div>
    </>
  )
}

export default HomePageContent
