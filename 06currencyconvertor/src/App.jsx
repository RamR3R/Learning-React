import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full flex flex-wrap h-screen justify-center item-center bg-no-repeat bg-cover bg-center'
    style={{backgroundImage:`url(https://images.pexels.com/photos/1405846/pexels-photo-1405846.jpeg?cs=tinysrgb&w=2048)`}}>

    </div>
    </>
  )
}

export default App
