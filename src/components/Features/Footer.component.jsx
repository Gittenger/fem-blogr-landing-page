import React from 'react'
import images from '../../assets/img-index'

const { LogoImg } = images

const Footer = () => {
  const listStyles = 'space-y-1.5 flex flex-col justify-center items-center'
  const listHeading = 'font-heading font-semibold text-center text-xl mb-6'
  const listWrapper = 'mb-14'

  return (
    <div className="bg-blue-gray-800 text-white pt-24 pb-12 w-full flex flex-col justify-center items-center rounded-tr-4xl">
      <div className="w-1/4 mb-20">
        <img className="w-full" src={LogoImg} alt="" />
      </div>

      <div className={` ${listWrapper}`}>
        <h3 className={`${listHeading}`}>Product</h3>
        <ul className={` ${listStyles}`}>
          <li>
            <a href="#">Overview</a>
          </li>

          <li>
            <a href="#">Pricing</a>
          </li>

          <li>
            <a href="#">Marketplace</a>
          </li>

          <li>
            <a href="#">Features</a>
          </li>

          <li>
            <a href="#">Integrations</a>
          </li>
        </ul>
      </div>

      <div className={`${listWrapper}`}>
        <h3 className={`${listHeading}`}>Company</h3>
        <ul className={` ${listStyles}`}>
          <li>
            <a href="#">About</a>
          </li>

          <li>
            <a href="#">Team</a>
          </li>

          <li>
            <a href="#">Blog</a>
          </li>

          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>

      <div className={`${listWrapper}`}>
        <h3 className={`${listHeading}`}>Connect</h3>
        <ul className={` ${listStyles}`}>
          <li>
            <a href="#">Contact</a>
          </li>

          <li>
            <a href="#">Newsletter</a>
          </li>

          <li>
            <a href="#">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
