import React from 'react'
import images from '../../assets/img-index'
import styles from './styles/Footer.module.css'

const { LogoImg } = images

const Footer = () => {
  const listStyles =
    'space-y-1.5 text-base md:text-lg flex flex-col justify-center items-center sm2:items-start sm2:space-y-2.5 md:space-y-3.5'
  const listHeading =
    'font-heading font-semibold text-center text-xl mb-6 sm2:text-left md:mb-10'
  const listWrapper = 'mb-14 sm2:mx-auto'

  return (
    <div className="bg-blue-gray-800 text-white pt-24 pb-12 w-full flex flex-col justify-center items-center rounded-tr-4xl md:flex-row md:items-start md:px-24">
      <div className="w-1/4 mb-20 sm2:w-1/6 md:w-32 md:mb-0 md:mr-10">
        <img className="w-full" src={LogoImg} alt="" />
      </div>

      <div className="flex flex-col justify-center items-center sm2:flex-row sm2:items-start w-4/5">
        <div className={` ${listWrapper}`}>
          <h3 className={`${listHeading}`}>Product</h3>
          <ul className={`${styles.list} ${listStyles}`}>
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
          <ul className={`${styles.list}  ${listStyles}`}>
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
          <ul className={`${styles.list}  ${listStyles}`}>
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
    </div>
  )
}

export default Footer
