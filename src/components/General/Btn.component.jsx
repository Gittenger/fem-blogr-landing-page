import React from 'react'

const arbStyles = {
  btn: {
    minWidth: '9rem',
  },
}

const Btn = ({ textContent, transparent, gradient }) => {
  return (
    <button
      style={arbStyles.btn}
      className={` font-bold py-2.5 px-4 rounded-3xl border-white border-2 duration-300 ${
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
