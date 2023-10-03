import { useState } from 'react'
import './App.css'
import Button from './components/button'
import Display from './components/display'
import Numbers from './components/Numbers'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h1 className='text-2xl font-sans underline-offset-1 bg-fuchsia-400 p-10 rounded-md'>This is the first use of react + tailwind</h1>
      <Display />
      <Numbers />
    </>
  )
}

export default App
