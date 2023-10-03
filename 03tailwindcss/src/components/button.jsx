import React from 'react'

const Button = ({innerText}) => {
   const disp = function disp(){
        console.log(innerText);
    }
  return (
    <button onClick={disp} className='text-xl text-green-800  bg-gray-200 p-2 rounded-3xl hover:text-blue-500 text-center '>
        {innerText}
    </button>
  )
}

export default Button