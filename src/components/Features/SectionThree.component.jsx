import React from 'react'
import images from '../../assets/img-index'

const { LaptopMob } = images

const headingText =
  'text-2xl font-heading font-semibold text-blue-800 mb-3.5 text-center w-3/5'
const pText =
  'px-10 text-center leading-relaxed tracking-wider font-light font-heading text-blue-gray-800'

const SectionThree = () => {
  return (
    <div className="flex flex-col justify-center items-center pt-20 pb-12">
      <div className="mb-14">
        <img className="w-full" src={LaptopMob} alt="" />
      </div>
      <h2 className={` ${headingText}`}>Free, open, simple</h2>
      <p className={`mb-12 ${pText}`}>
        Blogr is a free and open source application backed by a large community
        of helpful developers. It supports features such as code syntax
        highlighting, RSS feeds, social media integration, third-party
        commenting tools, and works seamlessly with Google Analytics. The
        architecture is clean and is relatively easy to learn.
      </p>
      <h2 className={` ${headingText}`}>Batteries included</h2>
      <p className={`mb-12 ${pText}`}>
        Batteries included. We built a simple and straightforward CLI tool that
        makes customization and deployment a breeze, but capable of producing
        even the most complicated sites.
      </p>
    </div>
  )
}

export default SectionThree
