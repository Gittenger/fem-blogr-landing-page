import React, { useReducer, useContext } from 'react'
import styles from './styles/MobileNav.module.css'
import navContext from '../../contexts/NavContext.js'
import images from '../../assets/img-index.js'

const { ArrowDark } = images

const initialState = {
  company: false,
  connect: false,
  product: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'toggleProduct':
      return { company: false, connect: false, product: !state['product'] }
    case 'toggleCompany':
      return { product: false, connect: false, company: !state['company'] }
    case 'toggleConnect':
      return { product: false, company: false, connect: !state['connect'] }
    default:
      throw new Error()
  }
}

const MobileNav = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const { navState } = useContext(navContext)

  const outerList = ''
  const outerHeading = 'w-full flex flex-col justify-center items-center'
  const innerList = 'bg-gray-100 text-blue-gray-700 py-8 my-2 w-4/5'

  return (
    <div
      className={`absolute flex-col justify-center text-blue-gray-800 rounded-lg items-center py-12 duration-300 ${
        styles.wrapper
      } ${navState ? 'opacity-100' : 'opacity-0'}`}
    >
      <ul className={`flex flex-col items-center justify-center text-center`}>
        <li className={`${outerHeading}`}>
          <button
            data-id="product"
            onClick={() => {
              dispatch({ type: 'toggleProduct' })
            }}
            className="flex justify-center items-center"
          >
            Product
            <span className="ml-2">
              <img src={ArrowDark} alt="" />
            </span>
          </button>
          <ul
            className={`${styles.innerList} ${innerList} ${
              state.product ? styles.listActive : 'hidden'
            }`}
          >
            <li>
              <a href="#" id="">
                Overview
              </a>
            </li>
            <li>
              <a href="#" id="">
                Pricing
              </a>
            </li>

            <li>
              <a href="#" id="">
                Marketplace
              </a>
            </li>

            <li>
              <a href="#" id="">
                Features
              </a>
            </li>

            <li>
              <a href="#" id="">
                Integrations
              </a>
            </li>
          </ul>
        </li>
        <li className={`${outerHeading}`}>
          <button
            data-id="company"
            onClick={() => {
              dispatch({ type: 'toggleCompany' })
            }}
            className="flex justify-center items-center"
          >
            Company
            <span className="ml-2">
              <img src={ArrowDark} alt="" />
            </span>
          </button>
          <ul
            className={` ${innerList} ${styles.innerList} ${
              state.company ? styles.listActive : 'hidden'
            }`}
          >
            <li>
              <a href="#" id="">
                About
              </a>
            </li>
            <li>
              <a href="#" id="">
                Team
              </a>
            </li>

            <li>
              <a href="#" id="">
                Blog
              </a>
            </li>

            <li>
              <a href="#" id="">
                Careers
              </a>
            </li>
          </ul>
        </li>
        <li className={`${outerHeading}`}>
          <button
            data-id="connect"
            onClick={() => {
              dispatch({ type: 'toggleConnect' })
            }}
            className="flex justify-center items-center"
          >
            Connect
            <span className="ml-2">
              <img src={ArrowDark} alt="" />
            </span>
          </button>
          <ul
            className={` ${styles.innerList} ${innerList} ${
              state.connect ? styles.listActive : 'hidden'
            }`}
          >
            <li>
              <a href="#" id="">
                Contact
              </a>
            </li>

            <li>
              <a href="#" id="">
                Newsletter
              </a>
            </li>

            <li>
              <a href="#" id="">
                LinkedIn
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default MobileNav
