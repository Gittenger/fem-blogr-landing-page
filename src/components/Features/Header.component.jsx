import React from 'react'
import images from '../../assets/img-index.js'
import CIndex from '../components.index.js'
import styles from './styles/Header.module.css'

const { LogoImg } = images

const Header = () => {
  const { HamburgerMenu, Btn, DeskNav } = CIndex

  return (
    <header
      className={`relative bg-gradient-to-br from-red-100 to-red-300 text-white rounded-bl-4xl pt-60 pb-6 w-full flex justify-center`}
    >
      <div
        className={`absolute w-full h-full rounded-bl-4xl z-30 ${styles.bgImg}`}
      ></div>
      <div className={`absolute z-30 md:hidden ${styles.logo}`}>
        <img src={LogoImg} alt="" />
      </div>
      <HamburgerMenu className="absolute z-40" />
      <DeskNav />
      <div className="flex flex-col w-full">
        <div className="z-40">
          <h1
            className={`font-semibold mb-8 font-heading text-3xl leading-normal flex flex-col justify-center items-center sm2:flex-row sm2:space-x-2 ${styles.heading}`}
          >
            <div className="whitespace-nowrap text-center">A modern</div>
            <div className="whitespace-nowrap text-center">
              publishing platform
            </div>
          </h1>
          <h2 className="px-12 mb-12 text-center text-base sm2:text-lg md:text-xl lg:text-2xl">
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
