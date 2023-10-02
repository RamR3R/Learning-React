import { useState } from 'react'
import './App.css'

function App() {
  const [counter,setCounter] = useState(10)

  const addvalue = ()=>{
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
  }

  const reduce = function(){
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Hi this is the first counter program in React</h1>
      <h2>Counter :{counter} </h2>
      <button
      onClick={addvalue}
      >add +</button>{"  "}
      <button
      onClick={reduce}
      >reduce -</button>
      <p>footer : {counter}</p>
    </>
  );
}

export default App
