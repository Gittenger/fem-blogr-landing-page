import React, { useReducer } from 'react'
import styles from './styles/DeskNav.module.css'
import CIndex from '../components.index.js'
import images from '../../assets/img-index.js'

const { ArrowLight, LogoImg } = images

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

const DeskNav = ({ className }) => {
  const { Btn } = CIndex

  const [state, dispatch] = useReducer(reducer, initialState)

  const outerHeading = 'flex flex-col justify-center items-center'
  const innerList =
    'relative left-4 bg-gray-100 text-blue-gray-700 w-full rounded-lg space-y-5 flex flex-col justify-center items-start text-lg px-10 duration-300 overflow-hidden'

  return (
    <div
      className={`absolute flex justify-center items-start text-white rounded-lg py-12 duration-300 ${styles.wrapper} hidden z-50 md:flex lg:w-5/6`}
    >
      <div
        className={`relative z-30 mr-6 ml-12 lg:mr-12 lg:ml-0 ${styles.logo}`}
      >
        <img src={LogoImg} alt="" />
      </div>
      <ul
        className={`flex items-start justify-start w-full text-center text-xl mr-auto`}
      >
        <li className={`${outerHeading}`}>
          <button
            onClick={() => {
              dispatch({ type: 'toggleProduct' })
            }}
            className="flex justify-center items-center"
          >
            Product
            <span className={`ml-2`}>
              <img
                className={`duration-100 ${
                  state.product ? styles.arrowRotate : styles.arrow
                }`}
                src={ArrowLight}
                alt=""
              />
            </span>
          </button>
          <ul
            className={`${styles.innerList} ${innerList} ${
              state.product ? 'h-auto py-8 my-2' : 'h-0 py-0 my-0'
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
            onClick={() => {
              dispatch({ type: 'toggleCompany' })
            }}
            className="flex justify-center items-center"
          >
            Company
            <span className="ml-2">
              <img
                className={`duration-100 ${
                  state.company ? styles.arrowRotate : styles.arrow
                }`}
                src={ArrowLight}
                alt=""
              />
            </span>
          </button>
          <ul
            className={` ${innerList} ${styles.innerList} ${
              state.company ? 'h-auto py-8 my-2' : 'h-0 py-0 my-0'
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
            onClick={() => {
              dispatch({ type: 'toggleConnect' })
            }}
            className="flex justify-center items-center"
          >
            Connect
            <span className="ml-2">
              <img
                className={`duration-100 ${
                  state.connect ? styles.arrowRotate : styles.arrow
                }`}
                src={ArrowLight}
                alt=""
              />
            </span>
          </button>
          <ul
            className={` ${styles.innerList} ${innerList} ${
              state.connect ? 'h-auto py-8 my-2' : 'h-0 py-0 my-0'
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
      <div
        className={`flex justify-center items-center space-x-6 relative ml-10 ${styles.endList}`}
      >
        <a className={` ${styles.underline}`} href="#">
          Login
        </a>
        <Btn sm textContent="Sign Up" />
      </div>
    </div>
  )
}

export default DeskNav
