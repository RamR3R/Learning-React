import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [generatedPasswords, setgeneratedPasswords] = useState([])
  const [password,setpassword] = useState("");
  const [length, setlength] = useState(8);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);

  const passwordGen = useCallback(()=>{
    let str = 'abcdefghijklmonpqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let pass = '';
    let num = '1234567890';
    let sym = '~!@#$%^&*,.';

    if(numberAllowed)
    str += num;
    if(charAllowed)
    str += sym;
    
    for(let i = 0; i<length ;i++)
    {
      const ran = Math.floor(Math.random() * str.length + 1);
      console.log(ran,pass);
      pass += str.charAt(ran); 
    }
    console.log(pass);
    setpassword(pass);
  },[numberAllowed,charAllowed,length]);

  useEffect(()=>{
    passwordGen();
  },[length,numberAllowed,charAllowed])

  const passwordRef = useRef(null);

  const copyPassword = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current.select();
  }



  return (
    <div className='w-1/2 m-auto rounded-2xl mt-10 border-solid border-2 text-white border-yellow-500 p-3'>
      <h1 className='text-3xl text-white rounded-2xl text-center '>Password Generator</h1>
      <div className='flex w-full m-auto justify-evenly h-10 p-1'>
        <input 
        type="text"
        placeholder='Password'
        value={password}
        readOnly
        className='py-1 px-3 w-full outline-none rounded-l-3xl text-black'
        ref={passwordRef}
         />
         <button className='outline-none bg-blue-700 text-white px-3 py-1 rounded-r-3xl shrink-0' onClick={copyPassword}>Copy</button>

      </div>
      <div className='flex w-full m-auto justify-evenly  p-1'>
        <div className='flex m-auto items-center gap-2 h-10 p-1'>
          <input 
          type="range" 
          min={8}
          max={20}
          defaultValue={8}
          className='cursor-pointer'
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label htmlFor="length">Length : {length}</label>
        </div>
        <div className='flex m-auto items-center gap-2 h-10 p-1'>
          <input 
          type="checkbox"
          value={numberAllowed}
          defaultChecked={numberAllowed}
          onChange={()=>{setnumberAllowed((lastValue)=>!lastValue)}}
          />
          <label htmlFor="numberAllowed">Number Allowed</label>
        </div>
        <div className='flex m-auto items-center gap-2 h-10 p-1'>
          <input 
          type="checkbox"
          value={charAllowed}
          defaultChecked={charAllowed}
          onChange={()=>{setcharAllowed((lastValue)=>!lastValue)}}
          />
          <label htmlFor="charAllowed">Symbol Allowed</label>
        </div>
      </div>

    </div>
  )
}

export default App
