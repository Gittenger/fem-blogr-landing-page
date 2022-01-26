import React from 'react'
import images from '../../assets/img-index'
import styles from './styles/SectionThree.module.css'

const { LaptopMob, LaptopDesk } = images

const headingText =
  'text-2xl font-heading font-semibold text-blue-800 mb-3.5 text-center w-3/5 md:text-left md:w-full'
const pText =
  'px-10 text-center leading-relaxed tracking-wider font-light font-heading text-blue-gray-800 md:text-left md:px-0 md:pr-24 lg:pr-36'

const SectionThree = () => {
  return (
    <div
      className="relative flex flex-col justify-center items-center pt-20 pb-12 md:pt-56 md:pb-52  
     lg:pt-80 lg:pb-96  md:grid md:grid-cols-2"
    >
      <div
        className={`mb-14 md:absolute md:top-24 lg:top-28 col-start-1 col-end-2 ${styles.imgWrapper}`}
      >
        <picture>
          <source srcSet={LaptopDesk} media="(min-width: 1024px)" />
          <img className="w-full" src={LaptopMob} alt="" />
        </picture>
      </div>
      <div className="flex flex-col justify-center items-center col-start-2 col-end-3">
        <h2 className={` ${headingText}`}>Free, open, simple</h2>
        <p className={`mb-12 ${pText}`}>
          Blogr is a free and open source application backed by a large
          community of helpful developers. It supports features such as code
          syntax highlighting, RSS feeds, social media integration, third-party
          commenting tools, and works seamlessly with Google Analytics. The
          architecture is clean and is relatively easy to learn.
        </p>
        <h2 className={` ${headingText}`}>Batteries included</h2>
        <p className={`mb-12 ${pText}`}>
          Batteries included. We built a simple and straightforward CLI tool
          that makes customization and deployment a breeze, but capable of
          producing even the most complicated sites.
        </p>
      </div>
    </div>
  )
}

export default SectionThree
