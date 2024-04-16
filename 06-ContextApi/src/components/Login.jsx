import React, { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
 
    const [userName,setUserName] = useState(null)
    const [password,setPassword] = useState(null)

    const {setUser}  = useContext(UserContext)


    const handleSubmission = (e) => {
        e.preventDefault()
        if(userName && password){
            setUser({userName,password})
        }else{
            alert("plz enter deatils")
        }
        
    }

    return (
    <div>
        <h2>Context Api Topic</h2>

        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} placeholder='UseName'/>
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password'/>
        <button onClick={handleSubmission}>Submit</button>
    </div>
  )
}

export default Login