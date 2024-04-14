 import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
 
 const App = () => {
  
  const [password,setPassword] = useState(null)

  const [length,setLength] = useState(8)

  const [numberAllowed,setNumberAllowed] = useState(false)

  const [characterAllowed,setCharacterAllowed] = useState(false)
  
  const clipBoardRef = useRef()

  const handleCopyToClipBoad = () => {
    window.navigator.clipboard.writeText(password)
    clipBoardRef.current?.select()
    clipBoardRef.current?.setSelectionRange(0,2)
  }


  const randomPasswordGenerator = () => {
    let passwordStr = ''
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed){
      str = str+"0123456789"
    }
    if(characterAllowed){
      str = str+"[$&+,:;=?@#|'<>.-^*()%!]"
    }
  

  for(let i = 1 ; i <= length ; i++  ){

    let result = Math.floor(Math.random() * str.length +1) 

    passwordStr = passwordStr+str.charAt(result)
    console.log(passwordStr)
  }

  setPassword(passwordStr)

}

useEffect(()=>{
randomPasswordGenerator()
},[length,numberAllowed,characterAllowed])

  return (
     <div className='h-screen w-screen bg-black text-white '>
      <div className='flex flex-col w-8/12 mx-auto  items-center'>
        <div className='flex mt-8 gap-2'>

          <input 
          type="text"
          id='inputFiled'

          value={password}
          readOnly
          placeholder={password}
          ref={clipBoardRef}
           className='w-[300px] py-2 px-2 rounded-lg text-black'/>
           <button onClick={handleCopyToClipBoad} className='bg-gray-700  rounded-lg px-2'>Copy To Clipboard</button>
          
        </div>
        <div className='flex mt-5 gap-3'>

          <input onChange={(e)=>setLength(e.target.value)}  type="range" name="range" id="range" value={length} min={8} max={100}/>
          <label htmlFor="range">length {length}</label>

          <input onClick={()=>setNumberAllowed((prev)=>!prev)} type="checkbox" name="" id="number" />
                  <label htmlFor="number">Number</label>

                  <input onClick={()=>setCharacterAllowed((prev)=>!prev)} type="checkbox" name="" id="character" />
                  <label htmlFor="character">Character</label>

        
        </div>
      </div>
     </div>
   )
 }
 
 export default App