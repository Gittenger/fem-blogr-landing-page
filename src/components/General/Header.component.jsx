import React from 'react'
import images from '../../assets/img-index.js'
import CIndex from '../components.index.js'
import styles from './styles/Header.module.css'

const { LogoImg } = images

const arbStyles = {
  h1: {
    fontSize: '2.1rem',
  },
}

const Header = () => {
  const { HamburgerMenu, Btn } = CIndex
  const HeaderStyles = 'pt-60 pb-6 w-full flex justify-center'

  return (
    <header
      className={`relative bg-gradient-to-br from-red-100 to-red-300 text-white rounded-bl-4xl ${HeaderStyles}`}
    >
      <div
        className={`absolute w-full h-full rounded-bl-4xl z-30 ${styles.bgImg}`}
      ></div>

      <div className="z-40">
        <div className={`absolute ${styles.logo}`}>
          <img src={LogoImg} alt="" />
        </div>
        <HamburgerMenu />
        <div className="flex flex-col">
          <h1
            className="font-semibold px-8 mb-8 font-heading text-3xl leading-normal flex flex-col justify-center items-center"
            style={arbStyles.h1}
          >
            <div className="whitespace-nowrap text-center">A modern</div>
            <div className="whitespace-nowrap text-center">
              publishing platform
            </div>
          </h1>
          <h2 className="px-12 mb-12 text-center">
            Grow your audience and build your online brand
          </h2>
          <div className="mb-32 flex justify-center items-center space-x-5">
            <Btn textContent="Start for Free" />
            <Btn textContent="Learn More" transparent />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
