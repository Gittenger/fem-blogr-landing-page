import React from 'react'
import styles from './styles/Btn.module.css'

const Btn = ({ textContent, transparent, gradient, sm }) => {
  return (
    <button
      className={` font-bold py-2.5 px-4 rounded-3xl border-white border-2 duration-300 ${
        sm ? styles.btnSm : styles.btn
      } ${
        transparent
          ? 'bg-transparent text-white hover:bg-white hover:text-red-300'
          : gradient
          ? ' text-white bg-gradient-to-r from-red-100 to-red-300 hover:text-blue-gray-800'
          : 'bg-white text-red-300 hover:bg-transparent hover:text-white'
      }`}
    >
      {textContent}
    </button>
  )
}

export default Btn
