import React, { useReducer, useContext } from 'react'
import styles from './styles/MobileNav.module.css'
import navContext from '../../contexts/NavContext.js'

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

  return (
    <div
      className={`absolute flex-col justify-center items-center py-12 ${
        styles.wrapper
      } ${navState ? '' : 'hidden'}`}
    >
      <ul>
        <li>
          <button
            data-id="product"
            onClick={() => {
              dispatch({ type: 'toggleProduct' })
            }}
          >
            Product
          </button>
          <ul className={`${state.product ? styles.listActive : 'hidden'}`}>
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
        <li>
          <button
            data-id="company"
            onClick={() => {
              dispatch({ type: 'toggleCompany' })
            }}
          >
            Company
          </button>
          <ul className={`${state.company ? styles.listActive : 'hidden'}`}>
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
        <li>
          <button
            data-id="connect"
            onClick={() => {
              dispatch({ type: 'toggleConnect' })
            }}
          >
            Connect
          </button>
          <ul className={`${state.connect ? styles.listActive : 'hidden'}`}>
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
