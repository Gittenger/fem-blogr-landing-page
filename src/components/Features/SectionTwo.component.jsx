import React from 'react'
import images from '../../assets/img-index'
import styles from './styles/SectionTwo.module.css'

const { PhonesImg } = images

const SectionTwo = () => {
  return (
    <>
      <div className={`relative z-40 -mb-52 md:hidden`}>
        <img className="" src={PhonesImg} alt="" />
      </div>
      <div className="flex-col justify-center items-center relative rounded-tr-4xl rounded-bl-4xl bg-gradient-to-tl from-blue-gray-desat to-blue-gray-800 overflow-hidden md:overflow-visible md:grid grid-cols-2">
        <div className={`absolute w-full h-full ${styles.bgImg}`}></div>
        <div
          className={`hidden md:block absolute z-40 col-start-1 col-end-2 ${styles.phonesImg}`}
        >
          <img className="" src={PhonesImg} alt="" />
        </div>

        <div className="relative text-white pt-56 pb-28 w-full text-center z-40 col-start-2 col-end-3 md:text-left md:py-36">
          <h2 className="text-4xl font-heading font-semibold mb-5">
            State of the Art Infrastructure
          </h2>
          <p className="px-9 leading-relaxed font-heading font-light md:pl-0 md:pr-36">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </>
  )
}

export default SectionTwo
