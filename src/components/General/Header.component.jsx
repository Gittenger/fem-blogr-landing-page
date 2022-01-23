import React from 'react'
import images from '../../assets/img-index.js'
import CIndex from '../components.index.js'

const { LogoImg } = images

const Header = () => {
  const { HamburgerMenu } = CIndex
  const HeaderStyles = 'pt-60 pb-6 w-full flex justify-center'

  return (
    <header className={` bg-blue-gray-800 text-white ${HeaderStyles}`}>
      <div>
        <img src={LogoImg} alt="" />
      </div>
      <HamburgerMenu />
      <h1>A Modern Publishing Platform</h1>
      <h2>Grow your audience and build your online brand</h2>
      <button>Start for Free</button>
      <button>Learn More</button>
    </header>
  )
}

export default Header
