import React from 'react'
import styles from './styles/Btn.module.css'

const Btn = ({ textContent, transparent, gradient, sm }) => {
  return (
    <button
      className={` font-bold py-3 px-4 rounded-3xl duration-300 ${
        sm ? styles.btnSm : styles.btn
      } ${
        transparent
          ? 'bg-transparent text-white ring-2 ring-inset ring-white hover:bg-white hover:text-red-300'
          : gradient
          ? ' text-white bg-gradient-to-r from-red-100 to-red-300 hover:text-blue-gray-800 hover:shadow-lg'
          : 'bg-white text-red-300 hover:bg-red-50 hover:text-white border-none'
      }`}
    >
      {textContent}
    </button>
  )
}

export default Btn
