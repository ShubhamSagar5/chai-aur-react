
import { useState } from 'react'
import './App.css'
import useCurrency from './hook/useCurrency'

import React from 'react'
import Input from './components/Input'
import convertCurrency from './hook/useCurrency'

const App = () => {
  
    const [amount,setAmount] = useState(0)
    const [resultAmount,setResultAmount] = useState(0)
    const [currType,setCurrType] = useState("USD")
    const [resCurrType,setResCurrType] = useState("INR") 
    const [netCall,setNetCall] = useState(true)
    const [finalResult,setFinalResult] = useState(null)

    console.log(amount +" "+ resultAmount +" "+currType +" "+ resCurrType)

    const handleSwapFunctionality = () => {
        setAmount(resultAmount)
        setResultAmount(amount)
        setCurrType(resCurrType)
        setResCurrType(currType)
    }

 

    const handleFinalResult = async() => {
        const convertedResult = await convertCurrency(currType,resCurrType,amount);
       console.log(convertedResult)
       setResultAmount(convertedResult)
      
   
    }


    return (
    <div className='w-screen h-screen  bg-cover' style={{backgroundImage : "url(https://images.pexels.com/photos/128234/pexels-photo-128234.jpeg)"}}>
        <div className='flex justify-center pt-20 opacity-90'>
            <div className='bg-slate-400 p-2 rounded-lg '>
            <div className='w-4/12 mx-auto relative flex justify-center items-center flex-col'>
<Input label="from" inputFiled={false} amount={amount} setAmount={setAmount} currType={currType} setCurrType={setCurrType}/>
<Input label="To" inputFiled={true} amount={resultAmount} setAmount={setResultAmount} currType={resCurrType} setCurrType={setResCurrType}/>
        
        <div className='absolute'>
            <button onClick={handleSwapFunctionality} className=' bg-blue-800 py-2 text-white px-4 flex justify-center rounded-lg w-[100px]'>Swap</button>
        </div>
        
        </div>
        <div className='mx-auto bg-blue-800 py-2 text-white px-4 flex justify-center rounded-lg w-[100px]'>
            <button onClick={handleFinalResult}> Convert </button>
        </div>
        </div>
        </div>
        
        
        
    </div>
  )
}

export default App