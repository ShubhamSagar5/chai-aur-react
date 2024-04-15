import React, { useState } from 'react'

import currencies from '../hook/CurrData'

const Input = ({label,inputFiled,amount,setAmount,currType,setCurrType}) => {
  
    const [currList,setCurrList] = useState(currencies)
  
   

    return (
    <div className='p-3 bg-white rounded-lg flex flex-row gap-x-[90px] m-2'>
           <div className='flex flex-col '>
                    <label htmlFor={label}>{label}</label>
                    <input type="number" name="lable" id="label" value={amount} onChange={(e)=>setAmount(e.target.value)} readOnly={inputFiled} className='text-black py-2 px-2 border border-black'/>
           </div>
           <div className='flex flex-col gap-2'>
                <label htmlFor="cuurType">CurrencyType</label>
                <select name="currType" id="currType" value={currType} onChange={(e)=>setCurrType(e.target.value)} className='border border-black'>
                    {
                        currList?.map((curr)=>(
                            <option key={curr.code} value={curr.code}>{curr.code}---{curr.name}</option>
                        ))
                    }
                </select>
           </div>
    </div>
  )
}

export default Input