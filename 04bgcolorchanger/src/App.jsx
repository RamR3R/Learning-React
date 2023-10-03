import { useState } from "react"

function App() {

  const [colour, setcolour] = useState("teal");

  const changeColor = (color)=>{
      setcolour(color);
  }

  return (
    <>
      {/* <h1 className='bg-green-500 text-3xl text-center p-5'>Baground Changer app with Vite</h1> */}
      <div  className='w-screen h-screen  duration-1000' style={{backgroundColor : colour}}>
        <div  className="fixed flex  flex-wrap justify-center bottom-12 inset-x-0 px-5">
          <div  className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-3xl bg-white">
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-red-500 text-black"
            onClick={()=>changeColor("red")}>
                Red
            </button>
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-blue-500 text-black"
            onClick={()=>changeColor("blue")}>
                Blue
            </button>
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-green-500 text-black"
            onClick={()=>changeColor("green")}>
                Green
            </button>
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-yellow-500 text-black"
            onClick={()=>changeColor("yellow")}>
                Yellow
            </button>
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-orange-500 text-black"
            onClick={()=>changeColor("orange")}>
                Orange
            </button>
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-pink-500 text-black"
            onClick={()=>changeColor("pink")}>
                Pink
            </button>
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-purple-500 text-black"
            onClick={()=>changeColor("purple")}>
                Purple
            </button>
            <button className="outline-none hover:outline-dotted px-3 py-2 rounded-full shadow-lg bg-teal-500 text-black"
            onClick={()=>changeColor("teal")}>
                RESET
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
