import React, { useState } from 'react'

const App = () => {
  
  const [color ,setColor] = useState('olive')
  
  return (
    <div className='w-screen h-screen ' style={{backgroundColor:color}}> 

      <div className='w-5/12 flex flex-wrap justify-between bg-white py-3  px-3 ml-[30%] bottom-10 fixed rounded-xl'>
          <button onClick={()=> setColor("red")} className='bg-red-500 px-3 py-2  flex flex-wrap rounded-xl'>
          
            Red
          </button>
          <button onClick={()=>setColor("green")} className='bg-green-500 px-3 py-2 gap-2 flex flex-wrap rounded-xl'>
          
          Green
        </button>
        <button onClick={()=>setColor("orange")} className='bg-orange-500 px-3 py-2 gap-2 flex flex-wrap rounded-xl'>
          
          Orange
        </button>
        <button onClick={()=>setColor("black")} className='bg-black text-white px-3 py-2 gap-2 flex flex-wrap rounded-xl'>
          
          Black
        </button>
        <button onClick={()=>setColor("white")} className='bg-slate-200 px-3 py-2 gap-2 flex flex-wrap rounded-xl'>
          
          white
        </button>

      </div>

    </div>
  )
}

export default App