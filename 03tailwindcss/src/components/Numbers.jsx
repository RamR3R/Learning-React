import React from 'react'
import Button from './button'

function Numbers() {
    const arr = ["AC" , "M+" , "M-" , '%',
    7,8,9 ,'*',
    4,5,6 , '-',
    1,2 ,3 , "+",
    0 , "00" , '.', '='  
  ];
  return (
    <div className='grid grid-cols-4 gap-3 border-solid border-2 border-red-500 rounded-b-3xl p-2 w-1/2 m-auto'>
    {
      arr.map((element,index)=>{
        console.log(index,element);
        return <Button innerText={element} key={index}/>
      }
      )
    }
    </div>
  )
}

export default Numbers