import React, { useState, useContext } from 'react'
import styles from './styles/HamburgerMenu.module.css'
import NavContext from '../../contexts/NavContext'

const btn = 'cursor-pointer transition duration-500 md:hidden'
const icon = 'transition duration-500 absolute'
const left = ''
const right = ''

const HamburgerMenu = ({ className }) => {
  const { navState, toggleNav } = useContext(NavContext)

  return (
    <button
      onClick={() => {
        toggleNav()
      }}
      className={`${btn} ${className} ${styles.parent} ${
        navState ? styles.active : ''
      }`}
    >
      <div className={`${icon} ${left}`}></div>
      <div className={`${icon} ${right}`}></div>
    </button>
  )
}

export default HamburgerMenu
